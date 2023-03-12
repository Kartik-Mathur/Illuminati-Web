let foodsList = [
    { name: 'Shahi Paneer', price: '100', description: 'Made with love❤️', type: 'vegSign' },
    { name: 'Butter Chicken', price: '120', description: 'Made with love❤️', type: 'nonVegSign' },
    { name: 'Dal Makhni', price: '50', description: 'Made with love❤️', type: 'vegSign' },
    { name: 'Paneer Tikka', price: '80', description: 'Made with love❤️', type: 'vegSign' },
    { name: 'Aaloo Sabzi', price: '40', description: 'Made with love❤️', type: 'jainVegSign' },
    { name: 'Matar Paneer', price: '90', description: 'Made with love❤️', type: 'jainVegSign' },
    { name: 'Chole Bhature', price: '180', description: 'Made with love❤️', type: 'vegSign' },
    { name: 'Chiken tikka', price: '50', description: 'Made with love❤️', type: 'nonVegSign' },
    { name: 'Idli Sambar', price: '40', description: 'Made with love❤️', type: 'jainVegSign' },
    { name: 'Seekh Kabab', price: '100', description: 'Made with love❤️', type: 'nonVegSign' },
]

const vegBox = document.querySelector('.veg');
const jainVegBox = document.querySelector('.jainVeg');
const nonVegBox = document.querySelector('.nonVeg');

const vegBoxSign = document.querySelector('#vegSign');
const jainVegBoxSign = document.querySelector('#jainVegSign');
const nonVegBoxSign = document.querySelector('#nonVegSign');
const foodList = document.querySelector('.foodList');
const filterWays = document.querySelector('.filterWays');

filterWays.addEventListener('click', (ev) => {
    console.log(ev.target.getAttribute('id'));
    let foodSignType = ev.target.getAttribute('id');
    let newFood;
    if(ev.target.checked == false){
        updateInitialFood();
        return;
    }
    
    if (foodSignType == 'vegSign') {
        jainVegBoxSign.checked = false;
        nonVegBoxSign.checked = false;
    }
    else if (foodSignType == 'jainVegSign') {
        vegBoxSign.checked = false;
        nonVegBoxSign.checked = false;
    }
    else if (foodSignType == 'nonVegSign') {
        vegBoxSign.checked = false;
        jainVegBoxSign.checked = false;
    }
    

    newFood = foodsList.filter((food) => {
        return food.type == foodSignType;
    })
    updateFood(newFood);
})

function updateFood(foods) {
    console.log(foods);
    foodList.innerText = '';
    foods.forEach((food) => {
        let li = document.createElement('li');
        li.innerHTML = `<li class="foodItem">
                <div class="foodName">
                ${food.name}<br>
                    <div class="small">${food.description}</div>
                </div>
            <div class="updateFoodCount">
                <span class="foodPrice">Price: $${food.price}</span>
                <span class="increaseFood">+</span>
                <span class="foodCount">1</span>
                <span class="decreaseFood">-</span>
            </div>
        </li>`
        foodList.appendChild(li);
    })
    // <li class="foodItem">Shahi Paneer
    //             <div class="updateFoodCount">
    //                 <span class="foodPrice">Price: $4</span>
    //                 <span class="increaseFood">+</span>
    //                 <span class="foodCount">3</span>
    //                 <span class="decreaseFood">-</span>
    //             </div>
    //         </li>

}

function updateInitialFood(){
    foodsList.forEach((food) => {
        let li = document.createElement('li');
        li.innerHTML = `<li class="foodItem">
                <div class="foodName">
                ${food.name}<br>
                    <div class="small">${food.description}</div>
                </div>
            <div class="updateFoodCount">
                <span class="foodPrice">Price: $${food.price}</span>
                <span class="increaseFood">+</span>
                <span class="foodCount">1</span>
                <span class="decreaseFood">-</span>
            </div>
        </li>`
        foodList.appendChild(li);
    })
}

updateInitialFood();