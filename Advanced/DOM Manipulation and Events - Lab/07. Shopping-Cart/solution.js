/* eslint-disable no-undef */
function solve() {
	// DOM elements
	const div = document.querySelector('.shopping-cart');
	const output = document.querySelector('textarea');
	const checkOut = document.querySelector('.checkout');
	const items = { products: new Set(), totalPrice: 0 };

	// setting eventListener to the div element
	div.addEventListener('click', onClick);

	// creating callback function
	function onClick(ev) {
		if (
			ev.target.tagName == 'BUTTON' &&
			ev.target.className == 'add-product'
		) {
			const productInfo = ev.target.parentNode.parentNode;
			const price = productInfo.querySelector(
				'.product-line-price'
			).textContent;
			const productName = productInfo.querySelector(
				'div > .product-title '
			).textContent;
			output.textContent += `Added ${productName} for ${price} to the cart.\n`;

			items.products.add(productName);
			items.totalPrice += Number(price);
		}
	}

	// creating eventListener to the checkout button
	checkOut.addEventListener(
		'click',
		(f = e => {
			output.textContent += `You bought ${Array.from(items.products).join(
				', '
			)} for ${items.totalPrice.toFixed(2)}.`;
			div.removeEventListener('click', onClick);
			checkOut.removeEventListener('click', f);
		})
	);
}
