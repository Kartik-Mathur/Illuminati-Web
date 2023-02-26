let parents = {
    lastName: 'Humans',
    world:'Earth'
}

let child = Object.create(parents);

child.firstName = 'Vaibhav';
child.age = 19;
child.world = 'Mars';

console.log(child.lastName);

console.log(child.__proto__ == parents)

