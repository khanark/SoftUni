class Person {
    // the constructor function declares whats going to be defined in the new instance of the class
    constructor(firstName, lastName, age, email) {
        // this keyword points at the instance of the class constructor
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    // creating a method that returns all the information about the user
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let p = new Person('Peter', 'Marinov', 18, 'pesho18@abv.bg');
console.log(p.toString());
