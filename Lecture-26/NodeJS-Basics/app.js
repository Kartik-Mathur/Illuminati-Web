const express = require('express');
const app = express();
const PORT = 4444;


app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/welcome',(req,res)=>{
    res.send("Welcome to CB");
}) 

app.get('/hello',(req,res)=>{
    console.log(req.query);
    const {name,hobby} = req.query;
    res.send("Hello My Friend!"+name+' Hobby: '+hobby);
})

app.get('/hello/:name',(req,res)=>{
    console.log(req);
    const {name} = req.params;
    res.send(`Hello, ${name}`);
})



// app.get('/hello/Tripti',(req,res)=>{
//     res.send("Hello Tripti");
// })

app.listen(PORT,()=>{
    console.log("server started at http://localhost:"+PORT);
});