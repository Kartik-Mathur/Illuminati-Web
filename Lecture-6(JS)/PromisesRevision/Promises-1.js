function goaJaenge(placementStatus) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (placementStatus) {
                resolve("Okay time to go to GOA!");
            }
            else {
                reject("Lagg gai!!");
            }
        },3000);
    })
}

let p = goaJaenge(true);
p
.then((message)=>{
    console.log(message);
})
.catch((gandaMessage)=>{
    console.log(gandaMessage);
})