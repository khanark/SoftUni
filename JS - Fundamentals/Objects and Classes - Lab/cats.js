function creatingCat(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  const cats = [];

  for (let strings of arr) {
    const tokens = strings.split(' ');
    const cat = new Cat(tokens[0], Number(tokens[1]));
    cats.push(cat);
  }

  for (const cat of cats) {
    cat.meow();
  }
}
creatingCat(['Mellow 2', 'Tom 5']);
