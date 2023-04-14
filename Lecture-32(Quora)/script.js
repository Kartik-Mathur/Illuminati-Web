const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyparser = require('body-parser');

app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
const Users = require('./database/scripts/users');

app.get('/app',(req,res)=>{
    res.sendFile(path.join(__dirname,'pages','index.html'));
})

app.post('/login',(req,res,next)=>{
    const {username,password} = req.body;
    Users.getUser(username,password)
        .then((user)=>{
            res.redirect('/app');
        })
        .catch(err=>{
            // req.err = err;
            next();
        })
    
})

app.post('/signup',(req,res)=>{
    const {username,password} = req.body;
    console.log(Users);
    Users.addUser(username,password)
        .then((msg)=>{
            res.redirect('/');
        })
        .catch(err=>{
            // res.send(`User Cannot Be added ${err.message}`);
            // req.err = err;
            next();
        });
})

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'pages','error.html'));
})


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});