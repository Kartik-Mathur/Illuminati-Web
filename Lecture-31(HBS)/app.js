const path = require('path');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const PORT = 4444;
const MyDB = require('./dataStore/js/script');
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json());

// let todos = [];

app.get('/gettask', async (req, res) => {
    console.log("Inside get task");
    try{
        let data = await MyDB.getTodos();
        console.log(data);
        res.send(data);
    }
    catch(err){
        res.send("Error Page in GetTask");
    }
})

app.post('/addtask', async (req, res) => {
    // todos.push(req.body.newTask);
    const {newTask} = req.body;
    try{
        await MyDB.addTodo({
            name: newTask,
            id: uuidv4()
        })
        res.redirect('/gettask');
    }catch(err){

    }
    
})

app.get('/deletetask',(req,res)=>{
    const {id} = req.query;
    console.log(id);
    MyDB.deleteTask(id)
        .then(()=>{
            res.redirect('/gettask');
        })
        .catch(err=>res.send("Delete mei error aa gaya"))
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});