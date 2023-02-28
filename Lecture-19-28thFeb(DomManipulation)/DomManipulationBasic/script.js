let btn = document.querySelector('#btn');
let ul = document.querySelector('#list');
let number = document.querySelector('#number');

btn.onclick = function(){
    let n = parseInt(number.value);
    ul.innerText = '';

    for(let i = 1 ; i <= 10 ; i++){
        let li = document.createElement('li');
        li.innerText = `${n} * ${i} : ${n*i}`;
        // li.innerText = n + ' * ' + i + ' = ' +n*i;
        ul.appendChild(li);
    }
    // for(let i = 1 ; i <= n ; i++){
    //     let li = document.createElement('li');
    //     li.innerText = i;
    //     ul.appendChild(li);
    // }
}
