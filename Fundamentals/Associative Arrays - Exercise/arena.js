function gladiator(arr) {
	// create collection that stores gladiator, technique and his skills
	let gladiators = {};
	let lastRecordedSkill = '';

	while (arr[0] !== 'Ave Cesar') {
		// parse the input (gladiator nad technique are strings, skills are numbers)
		const line = arr.shift();
		// parse the input when having command = "${gladiator} vs ${gladiator}" type
		if (line.includes('vs')) break;
		const [gladiator, skillName, skillPower] = line.split(' -> ');
		// - if the gladiator is already present only add his new technique or update his skill
		if (!gladiators.hasOwnProperty(gladiator)) {
			gladiators[gladiator] = { [skillName]: Number(skillPower) };
			lastRecordedSkill = skillName;
		} else if (gladiators[gladiator][lastRecordedSkill] <= skillPower) {
			gladiators[gladiator][skillName] = Number(skillPower);
			lastRecordedSkill = skillName;
		}
	}

	while (arr[0] !== 'Ave Cesar') {
		const line = arr.shift();
		const [firstGladiator, secondGladiator] = line.split(' vs ');
		// check if the both gladiators exist in the object
		if (
			gladiators.hasOwnProperty(firstGladiator) &&
			gladiators.hasOwnProperty(secondGladiator)
		) {
			// Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.
			const firstGladiatorSkills = Object.keys(gladiators[firstGladiator]);
			const firstGladiatorTotal = Object.values(
				gladiators[firstGladiator]
			).reduce((a, b) => a + b);
			const secondGladiatorTotal = Object.values(
				gladiators[secondGladiator]
			).reduce((a, b) => a + b);

			for (const skill of firstGladiatorSkills) {
				if (gladiators[secondGladiator].hasOwnProperty(skill)) {
					if (firstGladiatorTotal > secondGladiatorTotal) {
						delete gladiators[secondGladiator];
					} else {
						delete gladiators[firstGladiator];
					}
				}
			}
		}
	}
	const result = Object.entries(gladiators).sort((a, b) =>
		a[0].localeCompare(b[0])
	);
	const sorted = Object.entries(result[1]);
	console.log(sorted);
}
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
