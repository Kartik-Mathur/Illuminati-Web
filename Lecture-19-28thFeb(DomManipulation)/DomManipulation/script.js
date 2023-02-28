// 1. Select an Element
let elements = document.getElementsByTagName('div');
// console.log(elements);
// console.log(elements[0]);
// console.log(elements[0].children);
// console.log(elements[0].children[0]);

let lis = document.getElementsByClassName('item');
// console.log(lis);

let cpp = document.getElementById('cpp');
// console.log(cpp);

// 2. Create Element
let li = document.createElement('li');
li.innerHTML = '<strong>Android</strong>';
let ul = document.getElementById('courses');
ul.appendChild(li);



// window.onload = function () {
//     // 1. Select an Element
//     let elements = document.getElementsByTagName('div');
//     console.log(elements[0].children[0]);

//     let lis = document.getElementsByClassName('item');
//     console.log(lis);

//     let cpp = document.getElementById('cpp');
//     console.log(cpp);
// }