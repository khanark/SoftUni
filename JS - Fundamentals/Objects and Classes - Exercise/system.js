function printSystem(arr) {
	let register = {};

	for (const line of arr) {
		const [system, mainComponent, subComponent] = line.split(' | ');

		if (!register.hasOwnProperty(system)) {
			register[system] = {};
			if (!register[system].hasOwnProperty(mainComponent)) {
				register[system][mainComponent] = [subComponent];
			} else {
				register[system][mainComponent].push(subComponent);
			}
		} else {
			if (!register[system].hasOwnProperty(mainComponent)) {
				register[system][mainComponent] = [subComponent];
			} else {
				register[system][mainComponent].push(subComponent);
			}
		}
	}

	const orderedSystems = Object.keys(register).sort((a, b) => {
		if (b.length - a.length != 0) {
			return b.length - a.length;
		} else {
			return b.localeCompare(a);
		}
	});
	const orderedMainComponents = orderedSystems.map(
		system => console.log(register[system].length)
		// Object.keys(register[system]).sort((a, b) => b.length - a.length)
	);

	console.log(orderedMainComponents);
}

printSystem([
	'SULS | Main Site | Home Page',
	'SULS | Main Site | Login Page',
	'SULS | Main Site | Register Page',
	'SULS | Judge Site | Login Page',
	'SULS | Judge Site | Submittion Page',
	'Lambda | CoreA | A23',
	'SULS | Digital Site | Login Page',
	'Lambda | CoreB | B24',
	'Lambda | CoreA | A24',
	'Lambda | CoreA | A25',
	'Lambda | CoreC | C4',
	'Lambda | CoreC | C5',
	'Lambda | CoreC | C6',
	'Indice | Session | Default Storage',
	'Indice | Session | Default Security',
]);
