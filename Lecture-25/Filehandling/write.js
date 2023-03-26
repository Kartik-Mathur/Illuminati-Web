const fs = require('fs');
const path = require('path');

let movieDir = path.join(__dirname,'movies.json');

fs.writeFile(
    movieDir,
    `[{"name":"Hera Pheri","imdb":7},{"name":"Dhol","imdb":10},{"name":"Jungle mei rajas ka mangal","imdb":2},{"name":"De Dana Dan","imdb":1.5}]`,
    {
        encoding: 'utf8',
        flag: 'a'
    },((err)=>{
        if(!err)  console.log("Success");
        else console.log(err.message);
    })
)

 
console.log("Running rest of the code");