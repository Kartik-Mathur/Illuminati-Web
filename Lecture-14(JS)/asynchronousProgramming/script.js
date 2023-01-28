// setTimeout(function(){
//     console.log("Hello");
// },3000);

// let id = setInterval(function(){
//     console.log("Yes!!");
// },10);

// console.log(id);

// setTimeout(function(){
//     clearInterval(id);
// },3000);

let id = setInterval(function () {
    console.log("Hello");
}, 10, setTimeout(function(){
    clearInterval(id);
},3000));

// let id = SI(fun,10,ST(IdClear,3000));
console.log("Hello World");