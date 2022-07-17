function solve() {
	// DOM elements
	const input = document.getElementById('input');
	const result = document.getElementById('result');
	const menu = document.querySelector('#selectMenuTo');
	const btn = document.getElementsByTagName('button')[0];

	const optionToAppend = document.createElement('option');
	menu.appendChild(optionToAppend);
	const firstOptionTag = document.querySelector('#selectMenuTo > option');
	const secondOptionTag = document.querySelector(
		'#selectMenuTo option:nth-child(2)'
	);
	console.log(firstOptionTag);
	// creating first tag
	firstOptionTag.setAttribute('value', 'binary');
	firstOptionTag.textContent = 'Binary';

	// creating second tag
	secondOptionTag.setAttribute('selected', '');
	secondOptionTag.setAttribute('value', 'hexadecimal');
	secondOptionTag.textContent = 'Hexadecimal';

	btn.addEventListener('click', () => {
		const inputNumber = Number(input.value);
		const options = Array.from(menu.children);
		const selectedOption = options.filter(el => el.selected)[0].value;
		switch (selectedOption) {
			case 'hexadecimal':
				result.value = inputNumber.toString(16).toUpperCase();
				break;
			case 'binary':
				result.value = inputNumber.toString(2);
				break;
		}
	});
}
