function createCar(_name,_brand,_color) {
    this.name = _name
    this.brand=_brand
    this.color=_color
    this.drive = function(){
        console.log(`I am Driving ${this.name} and it is of ${this.color} color`);
    }
}

let car1 = new createCar("x1","bmw","white");
let car2 = new createCar("x1","bmw","black");

// console.log(car1);
// console.log(car2);
car1.drive()