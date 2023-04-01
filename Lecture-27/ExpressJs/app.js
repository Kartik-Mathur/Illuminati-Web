const path = require('path');
const express = require('express');
const app = express();
const PORT = 3333;

app.use(express.static(path.join(__dirname,'public')));

let tasks = [];

app.get('/addtask',(req,res)=>{
    console.log(req.query);
    tasks.push(req.query.task);
    res.send("Recieved add task request");
})


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});