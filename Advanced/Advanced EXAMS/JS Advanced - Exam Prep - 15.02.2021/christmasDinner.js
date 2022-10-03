class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  get budget() {
    return this._budget;
  }

  set budget(val) {
    if (val < 0) {
      throw new Error('The budget cannot be a negative number');
    } else {
      this._budget = val;
    }
  }

  shopping(product) {
    const [type, price] = product;

    if (this._budget < +price) {
      throw new Error('Not enough money to buy this product');
    }

    this.products.push(type);
    this._budget -= +price;

    return `You have successfully bought ${type}!`;
  }

  recipes(recipes) {
    const isIncluded = recipes.productsList.some(
      (product) => !this.products.includes(product)
    );

    if (isIncluded) {
      throw new Error('We do not have this product');
    } else {
      this.dishes.push({ ...recipes });
      return `${recipes.recipeName} has been successfully cooked!`;
    }
  }

  inviteGuests(name, dish) {
    const curDish = this.dishes.find((curDish) => curDish.recipeName === dish);

    if (!curDish) {
      throw new Error('We do not have this dish');
    }

    if (this.guests.hasOwnProperty(name)) {
      throw new Error('This guest has already been invited');
    }

    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    const output = Object.entries(this.guests).map((entry) => {
      const [guestName, dishName] = entry;
      const products = this.dishes
        .find((dish) => dish.recipeName == dishName)
        .productsList.join(', ');

      return `${guestName} will eat ${dishName}, which consists of ${products}`;
    });

    return output.join('\n');
  }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
  recipeName: 'Oshav',
  productsList: ['Fruits', 'Honey'],
});
dinner.recipes({
  recipeName: 'Folded cabbage leaves filled with rice',
  productsList: ['Cabbage', 'Rice', 'Salt', 'Savory'],
});
dinner.recipes({
  recipeName: 'Peppers filled with beans',
  productsList: ['Beans', 'Peppers', 'Salt'],
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
console.log(dinner.budget);
