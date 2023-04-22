const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','hbs');
// app.set('views','view');
app.use(express.urlencoded({extended:true}));

app.get('/index',(req,res)=>{
    res.render('index',{
        title: 'Todo App',
        name: 'Kartikey',
        hobby: 'Kuwara Baap Movie Dekhna'
    });
});

let todos = [
    {task: 'Swimming',id: 1},
    {task: 'Dancing',id: 2},
    {task: 'Reading',id: 3},
    {task: 'Movie',id: 4},
    {task: 'Gaming',id: 5}
];

app.get('/gettodo',(req,res)=>{
    res.render('todos',{
        todos
    });
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});