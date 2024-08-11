import express from 'express';

const port = 3000;
const app = express();

const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const quoteList = ["It's time to have fun!", "It's time to work hard!"];
let day = '';
let quote = '';

app.get('/', (req, res) => {
    GetWeekDay();
    res.render('index.ejs', {
            day: day,
            quote: quote
    })
})

app.listen(port, () => {
    console.log(`Listening from port ${port}`);
})

function GetWeekDay(){
    let i = new Date();
    day = dayList[i.getDay()];
    if (i === 0 || i === 6){
        quote = quoteList[0];
    }
    else{
        quote = quoteList[1];
    }
}