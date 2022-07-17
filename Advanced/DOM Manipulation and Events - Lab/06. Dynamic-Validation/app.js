function validate() {
	const pattern = /[a-z]+@[a-z]+.[a-z]+/;
	const input = document.getElementById('email');

	input.addEventListener('change', onChange);

	function onChange(e) {
		if (pattern.test(input.value)) {
			input.classList.remove('error');
		} else {
			input.classList.add('error');
		}
	}
}
