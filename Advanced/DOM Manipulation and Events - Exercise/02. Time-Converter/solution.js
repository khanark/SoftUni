function attachEventsListeners() {
	const btns = Array.from(document.querySelectorAll('[type="button"]'));

	btns.forEach(btn => btn.addEventListener('click', timeConvertor));

	function timeConvertor(e) {
		const timeType = e.target.parentNode.children[1].id;
		const value = Number(e.target.parentNode.children[1].value);
		let seconds = 0;

		switch (timeType) {
			case 'days':
				seconds = value * 24 * 60 * 60;
				break;
			case 'hours':
				seconds = value * 60 * 60;
				break;
			case 'minutes':
				seconds = value * 60;
				break;
			case 'seconds':
				seconds = value;
				break;
		}

		const minutes = seconds / 60;
		const hours = minutes / 60;
		const days = hours / 24;

		document.querySelector('#days').value = days;
		document.querySelector('#hours').value = hours;
		document.querySelector('#minutes').value = minutes;
		document.querySelector('#seconds').value = seconds;
	}
}
