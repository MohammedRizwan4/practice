// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.


class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails() {
        console.log(`Name : ${this.name}`)
        console.log(`Age : ${this.age}`)
        console.log(`Country : ${this.country}`)
    }
}

let person1 = new Person("Mohan", 25, "India")
let person2 = new Person("Kartik", 28, "Germany")
console.log('\nPerson-1 Details:');
person1.displayDetails()
console.log('\nPerson-2 Details:');
person2.displayDetails()

