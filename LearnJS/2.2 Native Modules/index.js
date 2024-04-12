const fs = require("fs");

fs.writeFile("message.txt","test read",(err) => {
    if(err) throw err;
    console.log("The file has been save");
})

setTimeout(() => {
    fs.readFile("message.txt","utf-8",(err, data) => {
        if (err) throw err;
        console.log(data);
      }); 
}, 100);

