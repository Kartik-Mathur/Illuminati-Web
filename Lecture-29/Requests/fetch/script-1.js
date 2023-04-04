const URL = 'https://cat-fact.herokuapp.com/facts';
const btn = document.querySelector('.btn');
const factsList = document.querySelector('.factsList');

function addDataToList(data) {
    data.forEach((d)=>{
        console.log(d)
        const li = document.createElement('li');
        li.innerText = d;
        factsList.appendChild(li);
    })
}

function getData(URL) {
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

function solve() {
    getData(URL)
        .then((data)=>{
            console.log(data);
            const billiKeFacts = data.map(d=>d.text);
            console.log(billiKeFacts);
            addDataToList(billiKeFacts);
        })
        .catch(err=>console.log(err));
}

btn.addEventListener('click', (ev) => {
    solve();
})