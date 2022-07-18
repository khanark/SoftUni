function lockedProfile() {
	// DOM elements
	const btns = Array.from(document.querySelectorAll('button'));

	// adding event to each button
	btns.forEach(btn => {
		btn.addEventListener('click', showMore);
	});

	// creating showMore function to show the user hidden fields
	function showMore(e) {
		const currentDiv = e.target.parentNode;
		const stage = Array.from(
			currentDiv.querySelectorAll('[type="radio"]')
		).filter(el => el.checked)[0].value;

		if (currentDiv.children[9].style.display == 'inline') {
			if (stage == 'unlock') {
				currentDiv.children[9].style.display = 'none';
				e.target.textContent = 'Show more';
			}
		} else if (stage == 'unlock') {
			currentDiv.children[9].style.display = 'inline';
			e.target.textContent = 'Hide it';
		}
	}
}
