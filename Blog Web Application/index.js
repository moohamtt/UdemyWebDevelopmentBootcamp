import express from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let postList = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index.ejs',
    {   postList: postList,
        contentList: postList.map(obj => obj.content),
        postTimeList: postList.map(obj => obj.time),
        num: postList.length,
    }
    );
});

app.post("/submit", (req, res) => {
    let content = req.body['content'];
    
    BlogPost(content);
    
    res.redirect("/");
});

app.post("/delete", (req,res) => {
    let index = req.body['i'];
    console.log(`The post id is ${index}`);

    DeletePostListAt(index);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

function BlogPost(content, callback = ()=>{}) {
    let obj = new Object();
    obj.content = content;
    obj.time = GetTime();
    postList.push(obj);
    console.log(postList, postList.length);
    callback();
}

function DeletePostListAt(index) {
    let postListFront = postList.slice(0, index);
    let postListBack = postList.slice(index+1, postList.length);
    postList = postListFront.concat(postListBack);
}

function GetTime(){
    const date = new Date();

    const options = {
    timeZone: 'Asia/Bangkok',  // Example of a city in the UTC+7 timezone
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date);
}