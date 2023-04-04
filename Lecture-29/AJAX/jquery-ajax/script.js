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
    $.ajax({
        method: "GET",
        url: URL
    })
        .done(function (data) {
            console.log(data);
            const billiKeFacts = data.map(d => d.text);
            addDataToList(billiKeFacts);
        });
    // $.get(URL)
    //     .done(function (data) {
    //         console.log(data);
    //         const billiKeFacts = data.map(d => d.text);
    //         addDataToList(billiKeFacts);
    //     }).fail(() => {
    //         console.log("Error aa gaya");
    //     })
}

function solve() {
    getData(URL);
}

btn.addEventListener('click', (ev) => {
    solve();
})
