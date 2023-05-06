const path = require('path');
const express = require('express');
const { mongoConnect } = require('./database/database');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const postRouter = require('./routes/posts');

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/post', postRouter);

mongoConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
