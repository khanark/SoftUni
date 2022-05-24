function gladiator(arr) {
	// create collection that stores gladiator, technique and his skill
	let gladiators = {};
	let lastSkillName = '';
	// parse the input (gladiator nad technique are strings, skills are numbers)
	while (arr[0] !== 'Ave Cesar') {
		let line = arr.shift();
		if (line.includes(' vs ')) break;
		const [gladiator, skillName, skillPower] = line.split(' -> ');

		if (!gladiators.hasOwnProperty(gladiator)) {
			gladiators[gladiator] = new Map();
			gladiators[gladiator].set(skillName, Number(skillPower));
			lastSkillName = skillName;
			// - if the gladiator is already present only add his new technique or update his skill
		} else {
			let lastSkillPower = gladiators[gladiator].get(lastSkillName);
			if (lastSkillPower <= Number(skillPower)) {
				gladiators[gladiator].set(skillName, Number(skillPower));
				lastSkillName = skillName;
			}
		}
	}
	// parse the input when having command = "${gladiator} vs ${gladiator}" type
	while (arr[0] !== 'Ave Cesar') {
		// check if the both gladiators exist in the object
		let line = arr.shift();
		const [firstGladiator, secondGladiator] = line.split(' vs ');
		if (
			gladiators.hasOwnProperty(firstGladiator) &&
			gladiators.hasOwnProperty(secondGladiator)
		) {
			const techniques = gladiators[firstGladiator].keys();
			const firstGladiatorTotal = Array.from(
				gladiators[firstGladiator].values()
			).reduce((a, b) => a + b);
			const secondGladiatorTotal = Array.from(
				gladiators[secondGladiator].values()
			).reduce((a, b) => a + b);
			// Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.
			for (const technique of techniques) {
				if (gladiators[secondGladiator].has(technique)) {
					if (firstGladiatorTotal > secondGladiatorTotal) {
						delete gladiators[secondGladiator];
					} else {
						delete gladiators[firstGladiator];
					}
				}
			}
		}
	}
	// print the output
	const result = Object.entries(gladiators).sort(function (a, b) {
		let firstGlad = Array.from(a[1].values()).reduce((a, b) => a + b);
		let secondGlad = Array.from(b[1].values()).reduce((a, b) => a + b);
		return secondGlad - firstGlad;
	});

	for (const [gladiator, values] of result) {
		const totalPoints = Array.from(values.values()).reduce((a, b) => a + b);
		const sorted = Array.from(values.entries()).sort((a, b) => {
			if (b[1] - a[1] === 0) {
				return a[0].localeCompare(b[0]);
			} else {
				return b[1] - a[1];
			}
		});
		console.log(`${gladiator}: ${totalPoints} skill`);
		for (const [skillName, value] of sorted) {
			console.log(`- ${skillName} <!> ${value}`);
		}
	}
}
//TODO: Fix the problem, Judge gives you 60/100
// gladiator([
// 	'Peter -> BattleCry -> 400',
// 	'Alex -> PowerPunch -> 300',
// 	'Stefan -> Duck -> 200',
// 	'Stefan -> Tiger -> 100',
// 	'Ave Cesar',
// ]);
console.log('-----');
gladiator([
	'Peter -> Duck -> 400',
	'Julius -> Shield -> 150',
	'Gladius -> Heal -> 200',
	'Gladius -> Support -> 250',
	'Gladius -> Shield -> 250',
	'Peter vs Gladius',
	'Gladius vs Julius',
	'Gladius vs Maximilian',
	'Ave Cesar',
]);
