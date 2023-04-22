const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyparser = require('body-parser');
const hbs = require('hbs');
const Questions = require('./database/scripts/questions');

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

const Users = require('./database/scripts/users');


app.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    Users.getUser(username, password)
        .then((user) => {
            console.log(user);
            req.user = user;
            // res.redirect('/app');
            res.render('index', {
                username: user[0].username,
                id: user[0].id
            })
        })
        .catch(err => {
            next();
        })
})

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    console.log(Users);
    Users.addUser(username, password)
        .then((msg) => {
            res.redirect('/');
        })
        .catch(err => {
            // res.send(`User Cannot Be added ${err.message}`);
            // req.err = err;
            next();
        });
});

app.post('/addquestion', (req, res, next) => {
    const { question, userId } = req.body;
    console.log(question, userId);
    let newQuestion = {
        question,
        id: userId
    };

    Questions.addQuestion(newQuestion)
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            next();
        })
})


app.get('/getquestions',(req,res,next)=>{
    const {userId} = req.query;
    Questions.getQuestions(userId)
        .then((questions)=>{
            
            res.send(questions)
        })
        .catch(err=>{
            next();
        })
})


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'pages', 'error.html'));
})



app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});