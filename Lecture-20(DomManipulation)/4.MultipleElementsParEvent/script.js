// const el = document.querySelectorAll('.el');
// // console.log(el)
// for (let e of el) {
//     e.addEventListener('click', (ev) => {
//         console.log(ev.target);
//     })
// }

// THIS THING IS CALLED AS EVENT DELEGATION
const container = document.querySelector('.container');
container.addEventListener('click',(ev)=>{
    console.log(ev.target);
})