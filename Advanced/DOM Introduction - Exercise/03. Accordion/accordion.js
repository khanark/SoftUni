function toggle() {
    // get the elements
	const btn = document.querySelector('.button');
	const div = document.getElementById('extra');

    // implement the logic
	if (btn.textContent == 'More') {
		div.style.display = 'block';
	} else {
		div.style.display = 'none';
	}

    // change the text content of the button
	btn.textContent = btn.textContent == 'More' ? 'Less' : 'More';
}
