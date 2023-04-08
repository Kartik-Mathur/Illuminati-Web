const btn = document.querySelector('.btn');
const newTask = document.querySelector('#newTask');
const form = document.querySelector('form');
const taskList = document.querySelector('.taskList');

function addToList(arr){
    taskList.innerText = '';
    arr.forEach((task)=>{
        let li = document.createElement('li');
        li.innerText = task.name;
        taskList.appendChild(li);
    })
}

function loadInitialTodo(){
    axios.get('/gettask')
        .then(data=>{
            console.log(data);
            addToList(data.data);
        })
        .catch(err=>console.log(err));
}
loadInitialTodo();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        let {data} = await axios.post('/addtask', { newTask: newTask.value });
        addToList(data);
    }
    catch(err){
        console.log(err);
    }
})
