function addItem() {
	const items = document.querySelector('#items');
	const input = document.getElementById('newItemText');
	const newLi = createElement('li', input.value);
	const newA = createElement('a', '[Delete]');
	newA.href = '#';

	items.appendChild(newLi);
	newLi.appendChild(newA);

	items.addEventListener('click', onClick);

	function onClick(ev) {
		if ((ev.target.tagName = 'a')) {
			const liItem = ev.target.parentNode;
			items.removeChild(liItem);
			input.value = '';
		}
	}

	function createElement(element, content) {
		const newElement = document.createElement(element);
		newElement.textContent = content;
		return newElement;
	}
}
