const taskList = document.querySelector('.taskList');
const form = document.querySelector('form');
const newTask = document.querySelector('.newTask');

// console.log("Hello");

function addToList(todos){
    taskList.innerText = '';
    console.log(todos)
    todos.forEach((d)=>{
        let li = document.createElement('li');
        li.innerText = d;
        taskList.appendChild(li);
    })
}


// function saveTaskOnServer(data) {
//     return new Promise((resolve, reject) => {
//         axios.post('/addtask', {
//             task: newTaskValue
//         })
//             .then((res) => {
//                 console.log(res);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     })
// }

function saveTaskOnServer(data) {
    return new Promise(async (resolve, reject) => {
        try {
            let todos = await axios.post('/addtask', { task: data });
            resolve(todos);
        }
        catch (err) {
            reject(err);
        }
    })
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const newTaskValue = newTask.value;
    console.log(newTaskValue);
    newTask.value = '';
    saveTaskOnServer(newTaskValue)
        .then((todos)=>{
            addToList(todos.data);
        })
        .catch(err=>console.log(err));
})