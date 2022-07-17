function focused() {
	const inputFields = Array.from(document.querySelectorAll('input'));

	inputFields.forEach(el => {
		el.addEventListener('focus', onFocus);
		el.addEventListener('blur', onBlur);
	});

	function onFocus(e) {
		e.target.parentNode.classList.add('focused');
	}

	function onBlur(e) {
		e.target.parentNode.classList.remove('focused');
	}
}
