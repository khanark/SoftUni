function create(words) {
	const div = document.querySelector('#content');
	const divs = words.map(text => createElement('div', 'p', text));

	divs.forEach(currentDiv => div.appendChild(currentDiv));

	divs.forEach(div => div.addEventListener('click', display));

	function display(e) {
		e.target.querySelector('p').style.display = '';
	}

	function createElement(type, child, content) {
		const element = document.createElement(type);
		const childToAppend = document.createElement(child);
		childToAppend.textContent = content;
		childToAppend.style.display = 'none';
		element.appendChild(childToAppend);
		return element;
	}
}
