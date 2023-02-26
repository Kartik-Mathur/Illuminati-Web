class Vehicle {
    constructor(name, year, speed, price) {
        this.name = name;
        this.year = year;
        this.speed = speed;
        this.isMehngi = () => {
            price > 20 ?
                console.log("Mehngi hai") :
                console.log("Sasti Hai");
        }
    }

    print() {
        console.log("Name: ", this.name);
        console.log("Year: ", this.year);
        console.log("Speed: ", this.speed);
        console.log();
    }

    static className(){
        console.log("this is vehicle class");
    }

    get speedVal(){
        return this.speed;
    }

    set speedVal(s){
        this.speed = s;
    }
    
}

let v = new Vehicle("Alto", 2022, 160, 40);
console.log(v);

let v1 = new Vehicle("G-Wagon", 2023, 140, 19);
console.log(v1);

console.log(v1.__proto__ == Vehicle.prototype); // true
v.print();
v1.print();

v.isMehngi();
v1.isMehngi();

console.log(v.price);

Vehicle.className();

console.log(v.speedVal);
v.speedVal = 200;
console.log(v);

// After doing inheritance wala part

class Car extends Vehicle{
    constructor(name,year,speed,price,type){
        super(name,year,speed,price);
        this.type = type;
    }

    printType(){
        console.log("Type of Car: ",type);
    }
}

let c = new Car("Alto",2020,160,200,"SUV");
console.log(c);
c.isMehngi();

console.log(Car.prototype.__proto__ == Vehicle.prototype);


// Another level of Inheritance
class Fortuner extends Car{
    constructor(name,year,speed,price,type,model){
        super(name,year,speed,price,type);
        this.model = model;
    }

    tellModel(){
        console.log(this.model);
    }
}

console.log(Fortuner.prototype.__proto__.__proto__ == Vehicle.prototype);