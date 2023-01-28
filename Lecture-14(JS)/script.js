function add(){

}

console.log( add(1)(2)() ) // 3
console.log( add(1)(2)(3)() ) // 6
console.log( add(1)(2)(3)(4)() ) // 10
console.log( add(1)(2)(3)(4)(5)() ) // 15









let x = fun(); // equation a
x(); // equation b // x needs to be a function
// put value of x from equation a to equation b
// ==> x() == fun()();

// let us assume: fun()() == fun1
let fun = fun1(); // only possible when fun1 is a function

