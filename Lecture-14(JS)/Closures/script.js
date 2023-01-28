function outerFun(){
    console.log("Inside Outer Fun");
    let a = 1;  
    function innerFun(){  
        a++;
        return a;
    }
    return innerFun;
}

let fun = outerFun(); 
console.log(fun()); // 2
console.log(fun()); // 3
console.log(fun()); // 4

let fun1 = outerFun();
console.log(fun1()); // 2
console.log(fun1()); // 3
console.log(fun1()); // 4

