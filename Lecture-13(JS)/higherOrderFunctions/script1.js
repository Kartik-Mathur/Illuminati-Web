// function houseTask(GharKiSafai,KitchenKiSafai){
//     GharKiSafai();
//     KitchenKiSafai();

//     function dihadhiMillGai(){
//         console.log("poora 100 rupay mille");
//     }
    
//     return dihadhiMillGai;
// }

function houseTask(GharKiSafai,KitchenKiSafai){
    GharKiSafai();
    KitchenKiSafai();
    
    return function(){
        console.log("poora 100 rupay mille");
    };
}


function jhaaduLagana(){
    console.log("Saaf safai ho gai");
}

function BartanDhona(){
    console.log("Saare bartan saaf ho gaye");
}

let x = houseTask(jhaaduLagana,BartanDhona);
// x();

// houseTask(jhaaduLagana,BartanDhona)();

function dihadhiMillGai(){
    console.log("poora 100 rupay mille");
};