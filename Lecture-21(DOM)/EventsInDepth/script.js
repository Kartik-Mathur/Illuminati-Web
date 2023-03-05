window.onload = function () {
    // Starting to build our TODO(Task-1)
    // Select all the required elements from HTML page
    // input: newtask, btn: to detect click, ul: to add task in it
    const newtask = document.querySelector('#newtask');
    const btn = document.querySelector('#addtask');
    const tasklist = document.querySelector('#tasklist')
    tasklist.innerHTML = localStorage.getItem('tasklist');

    // Adding event to the btn
    btn.addEventListener('click', (ev) => {
        const task = newtask.value;
        console.log(task);
        if (!task) return;
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
                <input type="checkbox" class="checkbox">
                <span class="taskText">${task}</span>
                <div class="btnGrp">
                    <button class="up"> <i class="fa-sharp fa-solid fa-arrow-up"></i> </button>
                    <button class="down"> <i class="fa-sharp fa-solid fa-arrow-down"></i> </button>
                    <button class="delete"> <i class="fa-solid fa-trash"></i> </button>
                </div>`

        li.innerHTML = str;
        li.classList.add('task');
        li.classList.add('task-1');

        // 3. append it in tasklist(ul)
        tasklist.appendChild(li);
        newtask.value = '';

        localStorage.setItem('tasklist',tasklist.innerHTML);
    })


    // Checkbox ke click hone ke baad ka kaam
    // const checkbox = document.querySelector('.checkbox');

    tasklist.addEventListener('click', (ev) => {
        console.log(ev);
        // console.log(ev.target.classList);
        let delVal = false, upVal = false, dwnVal = false, chckVal = false;
        ev.target.classList.forEach(element => {
            if (element == 'fa-arrow-up') {
                upVal = true;
            }
            else if (element == 'fa-arrow-down') {
                dwnVal = true;
            }
            else if (element == 'fa-trash') {
                delVal = true;
            }
            else if (element == 'checkbox') {
                chckVal = true;
            }
        });

        if (chckVal) {
            // Checkbox
            if (ev.target.checked == true) {
                ev.target.nextElementSibling.classList.add('lineCut');
            }
            else {
                ev.target.nextElementSibling.classList.remove('lineCut');
            }
            localStorage.setItem('tasklist',tasklist.innerHTML);
        }
        else if (delVal) {
            // Clicked delete button
            // li item ko udda do
            // console.log("Delete karna hai");
            // console.log(ev);
            ev.target.parentElement.parentElement.parentElement.remove();
            localStorage.setItem('tasklist',tasklist.innerHTML);
        }
        else if (upVal) {
            // Up btn
            // console.log("Up karna hai");
            let currentElement = ev.target.parentElement.parentElement.parentElement;
            let prevSibling = currentElement.previousElementSibling;
            let parentList = currentElement.parentElement;
            
            console.log(prevSibling);
            parentList.insertBefore(
                currentElement,
                prevSibling
            )
            localStorage.setItem('tasklist',tasklist.innerHTML);
        }
        else if (dwnVal) {
            // down
            let currentElement = ev.target.parentElement.parentElement.parentElement;
            let nextSibling = currentElement.nextElementSibling;
            let parentList = currentElement.parentElement;
            
            // nextSibling ko currentElement se pehle insert kardo, matlab currentElement
            // neeche chala jaega
            parentList.insertBefore(
                nextSibling,
                currentElement
            )
            localStorage.setItem('tasklist',tasklist.innerHTML);
        }
    })
}

