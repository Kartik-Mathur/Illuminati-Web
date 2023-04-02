const form = document.querySelector('form');
const newtask = document.querySelector('#newtask');
const priority = document.querySelector('#priority');


form.addEventListener('submit',(ev)=>{
    ev.preventDefault();

    console.log(newtask.value);
    console.log(priority.value);
    newtask.value = '';
    priority.value = '';
})