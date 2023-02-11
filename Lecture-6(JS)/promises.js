let iphone = false;

let p = new Promise((resolve,reject)=>{
    if(iphone == true){
        resolve("Yes! GF is still there");
    }
    else{
        // throw new Error("Break up");
        reject("Break Up");
    }
})

setTimeout(function(){
    p.then((message)=>{
        console.log(message);
    })
    .catch((msg)=>{
        console.log(msg);
    })
},3000);

