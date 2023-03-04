window.onload = function () {
    // Starting to build our TODO(Task-1)
    // Select all the required elements from HTML page
    // input: newtask, btn: to detect click, ul: to add task in it
    const newtask = document.querySelector('#newtask');
    const btn = document.querySelector('#addtask');
    const tasklist = document.querySelector('#tasklist')

    // Adding event to the btn
    btn.addEventListener('click', (ev) => {
        const task = newtask.value;
        console.log(task);

        // 1. create a li item
        const li = document.createElement('li');
        // 2. add the task value in it
        li.innerText = task;
        // 3. append it in tasklist(ul)
        tasklist.appendChild(li);
    })
}