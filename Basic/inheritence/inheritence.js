class Person{
constructor(_name,_age){
    this.name=_name
    this.age=_age
}
wellcome(){
    console.log(`wellcome ${this.name}`);
}
}

class Teacher extends Person{
    constructor(_name,_age,_classStrength){
        super(_name,_age)
        this.classStrength=_classStrength
    }
    test(){
        super.wellcome()
    }
}

class Student extends Person{
constructor(_name,_age,_cgpa){
    super(_name,_age)
        this.cgpa=_cgpa
    
}

}

// let person1=new Person("sai",22)
// console.log(person1);

let Teacher1=new Teacher("sai",22,222)
console.log(Teacher1);

Teacher1.test();

// let Student1= new Student("sai",22,99)
// console.log(Student1);
