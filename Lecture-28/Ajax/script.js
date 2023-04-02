// Ek xhr ka object banana padta hai
const xhr = new XMLHttpRequest();
const ul = document.querySelector('.list');
// Ya toh success hoga request karne par
xhr.onload = function(data){
    console.log(data);
    ul.innerText='';

    const facts = JSON.parse(data.currentTarget.response);
    facts.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element.text;
        ul.appendChild(li);
        // console.log(element.text);
    });

    console.log("Data",facts);
}


// Ya toh error aaega request karne par
xhr.onerror = function(){
    console.log("Lol!! Galat code");
}


// Request kaha bhejni hai yeh bhi batana hai
// xhr.open('GET',"https://cat-fact.herokuapp.com/facts");


// Request bhejne ke liye ab hoga aage kaam
const btn = document.getElementById('btn');
btn.addEventListener("click",()=>{
    xhr.open('GET',"https://cat-fact.herokuapp.com/facts");
    xhr.send();
})