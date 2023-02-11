function goaTrip(padhaiKari){
    return new Promise((resolve,reject)=>{
        if(padhaiKari == false){
            return reject("Ghar par baitho");
        }
        setTimeout(()=>{
            resolve("Cracked Adobe!!");
        },3000);
    })
}

let p = goaTrip(true);

p.then((message)=>{
    console.log(message);
    return "Trip par mazzaaa hi aa gaya! 10Lac haar gaye"
})
.then((newMessage)=>{
    console.log(newMessage);
})
.catch((err)=>{
    console.log(err);
})