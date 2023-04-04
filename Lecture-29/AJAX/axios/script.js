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

function getData(URL) {
    axios.get(URL)
        .then((data) => {
            console.log(data.data);
            const billiKeFacts = data.data.map(d => d.text);
            addDataToList(billiKeFacts);
        })
        .catch(err => console.log(err));
}

function solve() {
    getData(URL);
}

btn.addEventListener('click', (ev) => {
    solve();
})
