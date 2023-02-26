function Student(name,age,hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

let s1 = new Student('Vaibhav',19,'football');
let s2 = new Student('Garvit',21,'Paise Kamana');

Student.prototype.print = function(){
    console.log("Name: ",this.name);
    console.log("Age: ",this.age);
    console.log("hobby: ",this.hobby);
}

console.log(s1);
console.log(s2);

console.log(s1.__proto__ == Student);
console.log(s1.__proto__ == Student.prototype);

console.log(Student.prototype.__proto__ == Object.prototype)

s1.print();
s2.print();
