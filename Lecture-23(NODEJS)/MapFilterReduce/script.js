let arr =  [1,2,3,4,5];
// Issues with for each: It doesn't return a new array,
// just provides the iteration over the array
// let arr2 = [];
// arr.forEach((v)=>{
//     arr2.push(v*v);
// })
// console.log(arr2);

// map: It don't change the original array, but creates new array
let arr2 = arr.map((v,indx,arr)=>v*v*v);
// let arr2 = arr.map((v,indx,arr)=>{
    // return v*v
// });

console.log(arr);
console.log(arr2);

// filter: It don't change the original array, but creates new array
let arr3 = arr.filter((v)=>{
    if(v%2 == 0) return true;
    else return false;
})

console.log(arr3);

// reduce
arr = [1,2,3];
let sum = arr.reduce((accum,val,indx,ar)=>{
    return accum * val;
},1);

console.log(sum);
