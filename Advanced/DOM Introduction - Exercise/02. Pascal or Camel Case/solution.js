function solve() {
	// get the elements
	let string = document.getElementById('text').value;
	const convention = document.getElementById('naming-convention').value;
	const result = document.getElementById('result');

	// parse the string to lower case
	string = string.toLowerCase();

	// change the casing according to the user input
	if (convention == 'Camel Case') {
		string = string
			.split(' ')
			.map((word, index) => {
				if (index > 0) {
					return word.replace(word[0], word[0].toUpperCase());
				} else {
					return word;
				}
			})
			.join('');
	} else if (convention == 'Pascal Case') {
		string = string
			.split(' ')
			.map(word => word.replace(word[0], word[0].toUpperCase()))
			.join('');
		console.log(string);
	} else {
		string = 'Error!';
	}

	// render the new string
	result.textContent = string;
}
