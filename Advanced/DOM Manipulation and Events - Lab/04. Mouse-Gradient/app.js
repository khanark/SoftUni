function attachGradientEvents() {
	// DOM elements
	const div = document.getElementById('gradient');

	div.addEventListener('mousemove', onMove);

	function onMove(ev) {
		const percent = Math.floor(
			(Number(ev.offsetX) / Number(ev.target.clientWidth)) * 100
		);
		document.getElementById('result').textContent = `${percent}%`;
	}
}
