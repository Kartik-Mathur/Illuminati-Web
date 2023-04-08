const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 4444;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());

let todos = [];

app.get('/gettask',(req,res)=>{
    res.send(todos);
})

app.post('/addtask',(req,res)=>{
    
    console.log(req.body.task);
    todos.push(req.body.task);
    res.redirect('/gettask');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});