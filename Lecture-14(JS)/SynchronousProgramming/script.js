function waitASec() {
    let start_time = new Date().getTime();
    while ( (start_time + 1000) > new Date().getTime()) {

    }
}

function waitNSec(n) {
    for (let i = 0; i < n; i++) {
        waitASec();
    }
}

waitNSec(5);  
console.log("Hello");