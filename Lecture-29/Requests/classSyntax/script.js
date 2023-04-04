const btn = document.querySelector('.btn');
const factsList = document.querySelector('.factsList');

class listItems {
    constructor(URL) {
        this.URL = URL;
    }

    async getData() {
        try {
            let res = await fetch(this.URL);
            let data = await res.json();
            console.log(data);
            const billiKeFacts = data.map(d => d.text);
            console.log(billiKeFacts);
            this.addDataToList(billiKeFacts);
            return billiKeFacts;
        } catch (err) {
            console.log(err);
        }
    }

    addDataToList(data) {
        data.forEach((d) => {
            console.log(d)
            const li = document.createElement('li');
            li.innerText = d;
            factsList.appendChild(li);
        })
    }
}

btn.addEventListener('click', () => {
    let a = new listItems('https://cat-fact.herokuapp.com/facts');
    let data = a.getData();
    // console.log(data);
    // a.addDataToList(data);
})