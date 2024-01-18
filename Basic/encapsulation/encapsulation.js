function Person(_name,_age){
        var name=_name
        this.age=_age
        this.getName = function(){
            return name
        }
}

let person1  = new Person("sai",22);
// person1.name="abu"
console.log(person1.getName());