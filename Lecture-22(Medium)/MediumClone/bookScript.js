let bookMark = document.querySelector('.clickAble');

bookMark.addEventListener('click',(ev)=>{
    // console.log(ev.target);
    console.log(ev.target.classList);
    ev.target.classList.add('active');
})