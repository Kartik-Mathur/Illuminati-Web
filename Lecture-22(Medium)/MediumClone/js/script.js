let myTitle = document.querySelector('.myTitle');
let addBlog = document.querySelector('#addBlog');


console.log(myTitle)
console.log(addBlog)
addBlog.addEventListener('click', (ev) => {

    console.log(myTitle.value);

})