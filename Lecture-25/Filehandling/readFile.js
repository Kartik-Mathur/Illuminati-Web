const fs = require('fs');
const path = require('path');

let movieDir = path.join(__dirname,'movies.json');

fs.readFile(
    movieDir,
    {
        encoding:'utf-8'
    },
    (err,data)=>{
        if(err) return console.log(err.message);
        // console.log(data.toString());
        console.log(data);
    }
)
