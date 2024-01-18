class Person {
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }
    wellcome(){
        console.log(`wellcome ${this.name}`);
    }
}

let person1  = new Person("sai",22);
let person2 = new Person ("abu",23);

console.log(person1);
console.log(person2);
person1.wellcome()