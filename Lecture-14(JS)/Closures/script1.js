function outerFun(){
    let a = 1;  
    function innerFun(){  
        a++;
        function innerMostFun(){
            a++;
            return a;
        }
        return innerMostFun;
    }
    return innerFun;
}
let fun1 = outerFun();
let fun11 = fun1();
let fun12 = fun1();
let fun2 = outerFun();
let fun21 = fun2();

console.log(fun11());
console.log(fun12());

console.log(fun11());
console.log(fun12());

console.log(fun11());
console.log(fun12());

console.log(fun21());
console.log(fun21());
console.log(fun21());


// 4 
// 5
// 6
// 7
// 8
// 9
// 3 4
// 4 5
// 5 6
