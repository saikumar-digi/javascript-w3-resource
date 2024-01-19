// const myObj={}

// console.log(myObj);

// let person1={
//     age:23,
//     gender:"male"
// }

// console.log(person1);
// console.log(person1.hasOwnProperty('age'));

// function Person(_name,_age){
//     this.name=_name
//     this.age=_age
// }

// let person2= new Person("sai",22)
// console.log(person2);


function CreateCar(_name,_brand,_color) {
    this.name = _name
    this.brand=_brand
    this.color=_color
}
    CreateCar.prototype.drive = function(){
        console.log(`I am Driving ${this.name} and it is of ${this.color} color`);
    }


let car1 = new CreateCar("x1","bmw","white");
let car2 = new CreateCar("x1","bmw","black");

console.log(car1.drive());
console.log(car2);