function addItem() {
	// DOM elements
	const newLi = document.createElement('li');
	newLi.textContent = document.querySelector('#newItemText').value;
	document.getElementById('items').appendChild(newLi);
}
