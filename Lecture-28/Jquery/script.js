const h1 = document.querySelector('h1');
console.log(h1);

const ul = document.querySelector('.list');
const list = $('.list');
console.log(list);

/*
    const li = document.createElement('li');
    li.innerText = element.text;
    ul.appendChild(li);
*/
// const li = $('<li>').text("Avengers");
// list.append(li);

list.append($('<li>').text("Avengers").addClass("Avengers"));
list.append($('<li>').text("IronMan"));
list.append($('<li>').text("Hulk"));
list.append($('<li>').text("Spiderman"));

// const li = document.createElement('li');
// li.innerText = "Hello World";
// ul.appendChild(li);

// Finding the children
console.log(list.children())


// Iterate on children to get them one by one
list.children().each(function(){
    // console.log($(this).text());
    let li = $(this);
    console.log(li);
    console.log(this);
    // console.log(li.text(this.innerText+='-Movie'));
})