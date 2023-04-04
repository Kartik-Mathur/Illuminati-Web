const URL = 'https://cat-fact.herokuapp.com/facts';
const btn = document.querySelector('.btn');
const factsList = document.querySelector('.factsList');

fetch(URL)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        data.forEach((d)=>{
            console.log(d.text)
            const li = document.createElement('li');
            li.innerText = d.text;
            factsList.appendChild(li);
        })
    })
    .catch((err)=>{
        console.log(err);
    })