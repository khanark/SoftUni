function addItem() {
	// DOM elements
	const itemText = document.querySelector('#newItemText');
	const itemValue = document.querySelector('#newItemValue');

	// create new DOM element
	const newOption = createElement('option', itemText.value, itemValue.value);

	// append the newly created element to the select tag
	document.querySelector('#menu').appendChild(newOption);

	// reset the input fields
	itemText.value = '';
	itemValue.value = '';

	function createElement(type, content, value) {
		const element = document.createElement(type);
		element.textContent = content;
		element.value = value;
		return element;
	}
}
