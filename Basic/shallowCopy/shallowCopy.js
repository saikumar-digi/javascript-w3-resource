//spread operator {...}

// let firstName= 'sai'

// let secondName = firstName

// firstName='abu'

// console.log(firstName);
// console.log(secondName);


let firstPerson={
    name:"sai",
    age:23,
    address:{
        city:'bidar',
        state:'ka'
    }
}

let secondPerson= {...firstPerson}

firstPerson.name='vivek'
secondPerson.address.city='bhalki'


console.log(firstPerson);
console.log(secondPerson);
