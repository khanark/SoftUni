function generateReport() {
	// DOM elements
	const headers = [...document.querySelectorAll('input[type=checkbox]')];
	const length = [...document.querySelectorAll('tbody tr')].length;
	const output = document.getElementById('output');
	const result = [];

	// sort the headers that are selected via checkboxes
	const selectedHeaders = headers.filter(el => el.checked);

	// loop table's length (rows)
	for (let i = 0; i < length; i++) {
		// store current data
		const data = {};

		// for each selected header
		selectedHeaders.forEach(header => {
			const index = headers.indexOf(header);
			const path = `tbody tr td:nth-child(${index + 1})`;
			const value = [...document.querySelectorAll(path)][i].textContent;
			data[header.name] = value;
		});

		// push the data to the result array
		result.push(data);
	}

	// render the output
	output.textContent = JSON.stringify(result);
}
