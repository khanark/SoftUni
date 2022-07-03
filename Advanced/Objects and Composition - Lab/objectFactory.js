function factory(library, orders) {
    // create result array to store the composed object
	const result = [];

    // loop through the orders and compose a new object
	for (const order of orders) {
		const composed = Object.assign({}, order.template);

		for (const part of order.parts) {
			composed[part] = library[part];
		}

        // store the newly composed object
		result.push(composed);
	}

    // return the result of the factory function
	return result
}

// this is the input
const library = {
	print: function () {
		console.log(`${this.name} is printing a page`);
	},
	scan: function () {
		console.log(`${this.name} is scanning a document`);
	},
	play: function (artist, track) {
		console.log(`${this.name} is playing '${track}' by ${artist}`);
	},
};

const orders = [
	{
		template: { name: 'ACME Printer' },
		parts: ['print'],
	},
	{
		template: { name: 'Initech Scanner' },
		parts: ['scan'],
	},
	{
		template: { name: 'ComTron Copier' },
		parts: ['scan', 'print'],
	},
	{
		template: { name: 'BoomBox Stereo' },
		parts: ['play'],
	},
];
const products = factory(library, orders);
// console.log(products);
