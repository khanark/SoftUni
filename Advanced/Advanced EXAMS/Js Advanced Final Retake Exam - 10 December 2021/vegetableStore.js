class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        const addedProducts = new Set();

        vegetables.forEach((el) => {
            const [type, quantity, price] = el.split(' ');
            const product = this.availableProducts.find((product) => product.type == type);

            if (product) {
                product.quantity += +quantity;

                if (price > product.price) {
                    product.price = +price;
                }
            } else {
                addedProducts.add(type);
                this.availableProducts.push({ type, quantity: +quantity, price: +price });
            }
        });
        return `Successfully added ${Array.from(addedProducts).join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let result = 0;
        const purchases = [];

        selectedProducts.forEach((product) => {
            const [type, quantity] = product.split(' ');
            const totalPrice = purchases.reduce((a, b) => a + b, 0);

            if (!this.availableProducts.some((p) => p.type == type)) {
                throw new Error(
                    `${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`
                );
            }

            const vegetable = this.availableProducts.find((vegetable) => vegetable.type == type);

            if (vegetable.quantity < +quantity) {
                throw new Error(
                    `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
                        2
                    )}.`
                );
            } else {
                purchases.push(vegetable.price * +quantity);
            }

            result += vegetable.price * +quantity;
            vegetable.quantity -= +quantity;
        });
        return `Great choice! You must pay the following amount $${result.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        const currentProduct = this.availableProducts.find((product) => product.type == type);

        if (!currentProduct) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (+quantity > currentProduct.quantity) {
            currentProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            currentProduct.quantity -= +quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {
        const vegetablesData = this.availableProducts
            .sort((a, b) => a.price - b.price)
            .map((vegetable) => `${vegetable.type}-${vegetable.quantity}-$${vegetable.price}`);
        const output = [
            'Available vegetables:',
            vegetablesData.join('\n'),
            `The owner of the store is ${this.owner}, and the location is ${this.location}.`,
        ];
        return output.join('\n');
    }
}

let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
console.log(vegStore.loadingVegetables(['Okra 2.5 3.5', 'Beans 10 2.8', 'Celery 5.5 2.2', 'Celery 0.5 2.5']));
console.log(vegStore.rottingVegetable('Okra', 1));
console.log(vegStore.rottingVegetable('Okra', 2.5));
console.log(vegStore.buyingVegetables(['Beans 8', 'Celery 1.5']));
console.log(vegStore.revision());
