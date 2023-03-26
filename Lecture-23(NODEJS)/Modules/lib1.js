console.log("Im inside lib1");

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function changePassword(){
    console.log("I am changing the password");
}

module.exports =  {
    add,
    subtract,
    changePassword
}

