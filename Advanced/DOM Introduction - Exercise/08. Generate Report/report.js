function generateReport() {
	const headers = [...document.querySelectorAll('input[type=checkbox]')];
	const length = [...document.querySelectorAll('tbody tr')].length;
	const output = document.getElementById('output');
	const result = [];

	const selectedHeaders = headers.filter(el => el.checked);
	for (let i = 0; i < length; i++) {
		const obj = {};
		selectedHeaders.forEach(header => {
			const index = headers.indexOf(header);
			const path = `tbody tr td:nth-child(${index + 1})`;
			const value = [...document.querySelectorAll(path)][i].textContent;
			obj[header.name] = value;
		});
		result.push(obj);
	}
	output.textContent = JSON.stringify(result);
}
