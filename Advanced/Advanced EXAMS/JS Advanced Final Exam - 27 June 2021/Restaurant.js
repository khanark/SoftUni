class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(productsArr) {
        productsArr.forEach((element) => {
            const [productName, productQuantity, productTotalPrice] = element.split(' ');

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = {
                        productQuantity: +productQuantity,
                        productTotalPrice: +productTotalPrice,
                    };
                } else {
                    this.stockProducts[productName].productQuantity += +productQuantity;
                }
                this.budgetMoney -= +productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = { products: neededProducts, price: +price };
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        const meals = Object.keys(this.menu).length;
        return meals == 1
            ? `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            : `Great idea! Now with the ${meal} we have ${meals} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        const numberOfMeals = Object.keys(this.menu).length;

        if (numberOfMeals === 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        const output = Object.entries(this.menu).map((entry) => `${entry[0]} - $ ${entry[1].price}`);
        return output.join('\n');
    }

    makeTheOrder(meal) {
        let isValid = true;

        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            // check if we have the products to make this order
            const neededProducts = this.menu[meal].products;

            neededProducts.forEach((product) => {
                const [productName, productQuantity] = product.split(' ');

                if (
                    !this.stockProducts.hasOwnProperty(productName) ||
                    this.stockProducts[productName].productQuantity < +productQuantity
                ) {
                    isValid = false;
                }
            });

            if (!isValid) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                neededProducts.forEach((product) => {
                    const [productName, productQuantity] = product.split(' ');
                    this.stockProducts[productName].productQuantity -= +productQuantity;
                });
                this.budgetMoney += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }
        }
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Yogurt 1 10', 'Honey 1 10', 'Banana 1 10', 'Strawberries 10 10']));
console.log(
    kitchen.loadProducts([
        'Flour 0.5 2',
        'Oil 0.2 2',
        'Yeast 0.5 2',
        'Salt 0.1 2',
        'Sugar 0.1 2',
        'Tomato sauce 0.5 2',
        'Pepperoni 1 2',
        'Cheese 1.5 2',
    ])
);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(
    kitchen.addToMenu(
        'Pizza',
        ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'],
        15.55
    )
);
console.log(kitchen.showTheMenu());
console.log(kitchen.stockProducts);
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('Pizza'));
console.log(kitchen.budgetMoney);
