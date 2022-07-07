function colorize() {
	// god mode one liner, I feel sorry for debugging sessions
	[...document.querySelectorAll('table tr:nth-child(even)')].forEach(
		el => (el.style.backgroundColor = 'Teal')
	);
}
