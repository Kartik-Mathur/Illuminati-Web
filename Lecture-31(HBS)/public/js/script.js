const btn = document.querySelector('.btn');
const newTask = document.querySelector('#newTask');
const form = document.querySelector('form');
const taskList = document.querySelector('.taskList');

function addToList(arr) {
    taskList.innerText = '';
    arr.forEach((task) => {
        let li = document.createElement('li');
        li.classList.add('item');
        li.innerHTML = `
        <div class="listText">${task.name}</div>
        
        <div class="listButtons">
            <span class="upArrow">↑</span>
            <span class="downArrow">↓</span>
            <input name="taskid" type="hidden" value=${task.id}>
            <button type="submit" class="deleteTask">🗑</button>
        </div>`

        taskList.appendChild(li);
    })
}

function loadInitialTodo() {
    axios.get('/gettask')
        .then(data => {
            console.log(data);
            addToList(data.data);
        })
        .catch(err => console.log(err));
}
loadInitialTodo();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        let { data } = await axios.post('/addtask', { newTask: newTask.value });
        addToList(data);
    }
    catch (err) {
        console.log(err);
    }
})

taskList.addEventListener('click',(e)=>{
    // console.log(e.target);
    // console.log(e.target.previousElementSibling);
    // console.log(e.target.previousElementSibling.getAttribute('value'));
    let id = e.target.previousElementSibling.getAttribute('value')
    axios.get(`/deletetask?id=${id}`)
        .then((data)=>{
            console.log(data);
            addToList(data.data);
        })
        .catch((er)=>console.log(er));
})