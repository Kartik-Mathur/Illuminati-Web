const URL = 'https://cat-fact.herokuapp.com/facts';
const btn = document.querySelector('.btn');
const factsList = document.querySelector('.factsList');


function addDataToList(data) {
    data.forEach((d) => {
        console.log(d)
        const li = document.createElement('li');
        li.innerText = d;
        factsList.appendChild(li);
    })
}

async function getData(URL) {
    try {
        let res = await fetch(URL);
        let data = await res.json();
        console.log(data);
        const billiKeFacts = data.map(d => d.text);
        console.log(billiKeFacts);
        addDataToList(billiKeFacts);
    }catch(err){
        console.log(err);
    }
}

function solve() {
    getData(URL);
}

btn.addEventListener('click', (ev) => {
    solve();
})
