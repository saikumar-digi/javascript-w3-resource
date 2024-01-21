let firstPerson={
    name:"sai",
    age:23,
    address:{
        city:'bidar',
        state:'ka'
    }
}

let secondPerson= JSON.parse(JSON.stringify(firstPerson))

firstPerson.name='vivek'
secondPerson.address.city='bhalki'


console.log(firstPerson);
console.log(secondPerson);
