class Storage {
	constructor(capacity) {
		this.capacity = capacity;
		this.storage = [];
	}

	addProduct(product) {
		this.storage.push(product);
		this.capacity -= product.quantity;
	}

	getProducts() {
		const output = this.storage.map(product => JSON.stringify(product));
		return output.join('\n');
	}

	get totalCost() {
		return this.storage.reduce((acc, el) =>
			acc + el.price * el.quantity);
	}
}
let productOne = { name: 'Cucamber', price: 1.5, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.9, quantity: 25 };
let productThree = { name: 'Bread', price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
