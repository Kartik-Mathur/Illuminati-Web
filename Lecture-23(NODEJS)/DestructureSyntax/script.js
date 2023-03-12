let obj = {
    a: 10,
    b: "Hello",
    c: function(){
        console.log("Hello World");
    }
}

const {c} = obj;
// console.log(a);
// console.log(b);
c();

