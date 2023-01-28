function houseTask(GharKiSafai,KitchenKiSafai){
    GharKiSafai();
    KitchenKiSafai();

    return dihadhiMillGai;
}

function dihadhiMillGai(){
    console.log("poora 100 rupay mille");
}

function jhaaduLagana(){
    console.log("Saaf safai ho gai");
}

function BartanDhona(){
    console.log("Saare bartan saaf ho gaye");
}

let x = houseTask(jhaaduLagana,BartanDhona);

x();