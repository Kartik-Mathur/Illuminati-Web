const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');

app.use('/',express.static(path.join(__dirname,'public')));

app.get('/profile',(req,res)=>{
    res.sendFile(path.join(__dirname,'profile.html'));
})

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(path.join(__dirname,'style.css'));
// })

// app.get('/script.js',(req,res)=>{
//     res.sendFile(path.join(__dirname,'script.js'));
// })


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});