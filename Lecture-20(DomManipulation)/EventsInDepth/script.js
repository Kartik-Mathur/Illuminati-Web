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
        /*
            <li class="task task-1">
                </i>
                <input type="checkbox">
                <span class="taskText">Running</span>
                <div class="btnGrp">
                    <button class="up"> <i class="fa-sharp fa-solid fa-angle-up"></i> </button>
                    <button class="down"> <i class="fa-sharp fa-solid fa-arrow-down"></i> </button>
                    <button class="delete">🗑</button>
                </div>
            </li>
        */
        const li = document.createElement('li');
        // 2. add the task value in it
        let str = `
        <li class="task task-1">
                </i>
                <input type="checkbox">
                <span class="taskText">${task}</span>
                <div class="btnGrp">
                    <button class="up"> <i class="fa-sharp fa-solid fa-arrow-up"></i> </button>
                    <button class="down"> <i class="fa-sharp fa-solid fa-arrow-down"></i> </button>
                    <button class="delete"> <i class="fa-solid fa-trash"></i> </button>
                </div>
            </li>`

        li.innerHTML = str;
        
        // 3. append it in tasklist(ul)
        tasklist.appendChild(li);
    })
}