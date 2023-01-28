function add(firstNumber) {
    if (!firstNumber) return 0;
    let sum = firstNumber;
    function addMore(nextNumber) {
        if (!nextNumber) return sum;
        sum += nextNumber;
        return addMore;
    }
    return addMore;
}

console.log(add()) // 0

console.log(add(1)(2)()) // 3
console.log(add(1)(2)(3)()) // 6
console.log(add(1)(2)(3)(4)()) // 10
console.log(add(1)(2)(3)(4)(5)()) // 15
console.log(add(1)(2)(3)(4)(5)(6)(7)(8)(9)());