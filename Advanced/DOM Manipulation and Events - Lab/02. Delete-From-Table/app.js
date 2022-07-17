function deleteByEmail() {
	// DOM element
	const input = document.querySelector('input[name="email"]');
	const matches = Array.from(
		document.querySelectorAll('tbody td:last-child')
	);
	const output = document.querySelector('#result');

	const result = matches.filter(td => td.textContent == input.value);

	// output
	if (result.length > 0) {
		result.forEach(td => td.parentNode.remove());
		output.textContent = 'Deleted.';
	} else {
		output.textContent = 'Not found.';
	}
}
