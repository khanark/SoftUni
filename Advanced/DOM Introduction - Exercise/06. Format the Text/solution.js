function solve() {
	// DOM elements
	const input = document.getElementById('input').value;
	const output = document.getElementById('output');

	// split the user input by "." and filter out the empty strings
	const sentences = input.split('.').filter(x => x != '');

	// reset the innerHTML
	output.innerHTML = '';

	// loop and get every three sentences and group them into one paragraph
	for (let i = 0; i < sentences.length; i += 3) {
		const paragraph = sentences.slice(i, 3 + i).join('.');
		output.innerHTML += '<p>' + paragraph + '.' + '</p>';
	}
}
