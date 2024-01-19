let person1={
    name:"sai",
    age:23,

}

let printDetails = function(city,dis){
    console.log(`hii ${this.name} you are from ${city} and ${dis}`);
}

let person2={
    name:"tony",
    age:43
}


printDetails.call(person2,"bidar","bhalki")
printDetails.apply(person2,["bidar","bhalki"])
let myFn=printDetails.bind(person2,"bidar","bhalki")
console.log(myFn);
myFn();

// person1.printDetails.call(person2)

// person1.printDetails();
// person2.printDetails();

