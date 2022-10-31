class Employee {
  counter = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.tasks = [];
  }

  set salary(val) {
    this._salary = val;
  }

  work() {
    if (this.counter == this.tasks.length) {
      this.counter = 0;
    }

    const str = `${this.name} ${this.tasks[this.counter]}`;
    this.counter++;
    return str;
  }

  collectSalary() {
    return `${this.name} received ${this._salary} this month`;
  }
}

const boris = new Employee("borislav", "godumov");
boris.salary = "2500";
console.log(boris);
console.log(boris.collectSalary());
