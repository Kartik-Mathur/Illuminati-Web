function home(cleaning,learning){
    cleaning();
    learning();
    return function earning(){
        console.log("Paise Kamana");
        return function sleeping(){
            console.log("Soo jaana");
        }
    };
}

let x = home(cleaning,learning);
// x = function earning(){
//     console.log("Paise Kamana");
//     return function sleeping(){
//         console.log("Soo jaana");
//     }
// };
let y = x();
// y = function sleeping(){
//         console.log("Soo jaana");
//     }
y();

function cleaning(){
    console.log("Jhaadu lagana");
}

function learning(){
    console.log("Coding Karna");
}

// function earning(){
//     console.log("Paise Kamana");
// }