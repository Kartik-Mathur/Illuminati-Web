// function fun(){
//     console.log(this);
// }

let fun = ()=>{
    console.log(this);
}

let obj = {
    name: 'Coding Blocks',
    course:'WebDev'
}

fun();
// fun.call(obj);

let person ={
    name: 'Vaibhav',
    gambler: true,
    gambling: ()=>{
        console.log(this);
    }
}

person.gambling();