import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let header = '';


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  header = 'Enter your name below 👇';
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
  let charInName = req.body['fName'].length + req.body['lName'].length;
  header = `There are ${charInName} letters in your name.`
  res.render('index.ejs', {header: header});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function CountLetter(str){
  return str.length;
}