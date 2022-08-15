function solve() {
    const persons = [];
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

    persons.push(new Person('SoftUni'));
    persons.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    persons.push(new Person('Stephan', 'Johnson', 25));
    persons.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));
    return persons;
}
console.log(solve());
