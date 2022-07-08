function search() {
	// get the elements
	const input = document.getElementById('searchText').value;
	const result = document.getElementById('result');
	const towns = [...document.querySelectorAll('#towns li')];

	// reset the towns every time user types different input
	const resetTowns = () => {
		towns.forEach(town => {
			town.style.textDecoration = 'none';
			town.style.fontWeight = 'normal';
		});
	};

	resetTowns();

	// filter all the towns by the user's input
	const filteredTowns = towns.filter(town =>
		town.textContent.includes(input)
	);

	// underline and bold the towns
	filteredTowns.forEach(town => {
		town.style.textDecoration = 'underline';
		town.style.fontWeight = 'bold';
	});

	// render all the matched towns
	result.textContent = `${filteredTowns.length} matches found`;
}
