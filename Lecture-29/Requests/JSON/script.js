let obj = {
    a: 1,
    b: true,
    c: [12,3,4],
    d:{
        movie: 'Hello'
    }
}

let obj_string = JSON.stringify(obj);
console.log(obj_string);
console.log(JSON.parse(obj_string));