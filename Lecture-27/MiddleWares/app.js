const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
let flag = true;

app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    console.log("Decoding the incoming request");
    next();
})

app.use((req,res,next)=>{
    console.log("Doing some other important task");
    next();
})

app.use('/img',(req,res,next)=>{
    console.log("Compressing Image");
    next();
})

app.get('/',(req,res,next)=>{
    res.send("Hello");
    next();
})

app.get('/img',(req,res,next)=>{
    if(flag) res.send("Hello! Received an Image");
    else res.send("Hello, dobara bhejo");

    flag=!flag;

    next();
})


app.use((req,res,next)=>{
    console.log("Sab kuch badhiya chala");
    next();
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});