//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const PASSWORD = "get-me-in";

let userAutherized = false;

app.use(bodyParser.urlencoded({extended:true}));
app.use(CheckPasswod);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
    userAutherized = false;
});

app.post("/check", (req, res) => {
    if(userAutherized){
        res.sendFile(__dirname + "/public/secret.html")
    }
    else{
        //res.sendFile(__dirname + "/public/index.html")
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

function CheckPasswod(req, res, next){
    let inputPwd = req.body["password"];
    if (inputPwd === PASSWORD){
        userAutherized = true;
    }
    else{
        userAutherized = false;
    }
    next();
}