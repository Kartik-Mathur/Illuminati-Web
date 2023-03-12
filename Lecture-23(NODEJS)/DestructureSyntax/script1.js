function add(a,b,...arr){
    
    let sum = 0;
    console.log(arr);
    arr.forEach((v)=>{
        sum+=v;
    })

    console.log(a+b+sum);
}


add(1,2,3,4,5,6,7,8,9);


// forEach property
let arr = [1,2,3,4,5,7,8,6,9];
arr.forEach((v,indx,ar)=>{
    console.log(`Index: ${indx}, value: ${v}, arr: ${ar}`);
})

let arr1 = [10,11,12,13,14];
// let arr2 = [];
let arr2 = [...arr,...arr1];
// arr.forEach((v)=>{
//     arr2.push(v);
// })

// arr1.forEach((v)=>{
//     arr2.push(v);
// })

console.log(arr2);