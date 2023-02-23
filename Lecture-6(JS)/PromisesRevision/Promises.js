let SaathRehPaaye = false;

let p = new Promise((resolve,reject)=>{
    console.log("Running the promise");
    if(SaathRehPaaye){
        resolve("Badhiyaa hai");
    }
    else{
        reject("Savdhaan India mei episode");
    }
})

// p
// .then((message)=>{
//     console.log(message);
// })
// .catch((gandaMessage)=>{
//     console.log(gandaMessage);
// })