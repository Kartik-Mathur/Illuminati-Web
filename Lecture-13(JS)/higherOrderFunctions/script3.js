function hello(){
    console.log("Hello");
    return world;
}

function world(){
    console.log("World");
}

let x = hello();
x();