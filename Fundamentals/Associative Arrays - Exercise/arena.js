function gladiator(arr) {
	// create collection
	let tier = {};
	let lastValue = 0;
	// parse the input
	for (const line of arr) {
		if (line === 'Ave Cesar') break;
		if (line.includes(' vs ')) {
			const [gladiator1, gladiator2] = line.split(' vs ');
			if (tier.hasOwnProperty(gladiator1) && tier.hasOwnProperty(gladiator2)) {
				const skills = Object.keys(tier[gladiator1]);

				for (const skill of skills) {
					if (tier[gladiator2].hasOwnProperty(skill)) {
						const totalGladiator1 = Object.values(tier[gladiator1]).reduce(
							(a, b) => a + b
						);
						const totalGladiator2 = Object.values(tier[gladiator2]).reduce(
							(a, b) => a + b
						);

						if (totalGladiator1 > totalGladiator2) {
							delete tier[gladiator2];
						} else {
							delete tier[gladiator1];
						}
						break;
					}
				}
			}
		} else {
			const [gladiator, skill, power] = line.split(' -> ');

			if (!tier.hasOwnProperty(gladiator)) {
				tier[gladiator] = { [skill]: 0 };
				lastValue = 0;
			}
			if (tier[gladiator].hasOwnProperty(skill)) {
				if (lastValue <= Number(power)) {
					tier[gladiator][skill] = Number(power);
				}
				lastValue = tier[gladiator][skill];
			} else {
				tier[gladiator][skill] = Number(power);
			}
		}
	}

	const sorted = Object.entries(tier).sort((a, b) => {
		const totalGladiator1 = Object.values(a[1]).reduce((a, b) => a + b);
		const totalGladiator2 = Object.values(b[1]).reduce((a, b) => a + b);
		return totalGladiator2 - totalGladiator1;
	});

	for (const [name, obj] of sorted) {
		const totalPoints = Object.values(obj).reduce((a, b) => a + b);
		console.log(`${name}: ${totalPoints} skill`);

		const sortedBySkillPower = Object.entries(obj).sort(
			(a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
		);
		sortedBySkillPower.forEach(skill =>
			console.log(`- ${skill[0]} <!> ${skill[1]}`)
		);
	}
}

gladiator([
	'Peter -> Duck',
	'Julius -> Shield -> 0',
	'Gladius -> Heal -> 400',
	'Gladius -> Heal -> 600',
	'Gladius -> Shield -> 0',
	'Gladius -> Shield -> 0',
	'Gladius vs Julius',
	'Peter vs Gladius',
	'Gladius vs Maximilian',
	'Ave Cesar',
]);
