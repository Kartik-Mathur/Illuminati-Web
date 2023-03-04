const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp');
const inp1 = document.querySelector('#inp1');
const nameMessage=document.querySelector('#name-message');
btn.addEventListener('click', () => {
    console.log("Btn clicked");
})

inp.addEventListener('keydown', (ev) => {
    if(parseInt(ev.keyCode) >= 65 
    && parseInt(ev.keyCode) <=90){
        // console.log("Sahi hai abhi tak")
        nameMessage.innerText = "Sahi hai abhi tak"
    }
    else{
        // console.log("Not Allowed");
        nameMessage.innerText = "Not Allowed"
    }
})

inp1.addEventListener('keyup', (ev) => {
    console.log(ev.target.value);
})

// const dog = document.querySelector('#dog');
const cat = document.querySelector('#cat');

// dog.addEventListener('mouseout',(ev)=>{
//     // console.log(ev);
//     console.log(ev.fromElement.innerText);
// })

cat.addEventListener('mouseout',(ev)=>{
    console.log(ev.fromElement.innerText);
})