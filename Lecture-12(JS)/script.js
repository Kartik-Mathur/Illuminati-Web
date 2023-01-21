// 'use strict';

// var a = 5;
// var b = "Hello";
// var c = true;
// let d = 10.11;
// const e = "Hello World";

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let x = {
//     a: 112130,
//     b: "hello",
//     c: true
// }

// console.log(x.a);
// console.log(x.b);
// console.log(x.c);

let obj = {
    '':'Empty String',
    ' ':'Space',
    a: 10
};

console.log(obj['']);
console.log(obj[' ']);
console.log(obj['a']);

let arr = [
    "Hello", 1, 2, 3,"World",true
];
arr.push(3214);
console.log(arr);
arr.pop();
arr.unshift("sdadad");
console.log(arr);

arr.shift();
console.log(arr);

arr[10] = "Some value";
console.log(arr);

for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}

let obj1 = {
    x:'Empty String',
    y:'Space',
    z: 10
};
for(let i in obj1){
    console.log(obj1[i])
}

let str = "Coding Blocks";
for(let c of str){
    console.log(c);
}