function game(arr) {
  // create init variables
	const number = Number(arr.shift());
	const collectionFromInput = arr.splice(0, number);

  // crate collection
	const heroes = {};

  // store the input
	for (const line of collectionFromInput) {
		const [hero, hp, mp] = line.split(' ');
		heroes[hero] = { health: Number(hp), mana: Number(mp) };
	}

  // loop and implement logic behind commands
	while (arr[0] !== 'End') {
		let line = arr.shift();
		const [command, hero, ...rest] = line.split(' - ');
		let { health, mana } = heroes[hero];

		switch (command) {
			case 'CastSpell':
				const [neededMana, spell] = rest;

				if (mana >= Number(neededMana)) {
					mana -= Number(neededMana);
					heroes[hero].mana = mana;
					console.log(
						`${hero} has successfully cast ${spell} and now has ${mana} MP!`
					);
				} else {
					console.log(`${hero} does not have enough MP to cast ${spell}!`);
				}
				break;
			case 'TakeDamage':
				const [dmg, attacker] = rest;
				health -= Number(dmg);

				if (health > 0) {
					console.log(
						`${hero} was hit for ${dmg} HP by ${attacker} and now has ${health} HP left!`
					);
					heroes[hero].health = health;
				} else {
					delete heroes[hero];
					console.log(`${hero} has been killed by ${attacker}!`);
				}
				break;
			case 'Recharge':
				let [rechargedMana] = rest;
				mana += Number(rechargedMana);

				if (mana > 200) {
					rechargedMana = 200  - (mana - rechargedMana);
					mana = 200;
				}
				console.log(`${hero} recharged for ${rechargedMana} MP!`);
				heroes[hero].mana = mana;
				break;
			case 'Heal':
				let [healAMount] = rest;
				health += Number(healAMount);

				if (health > 100) {
					healAMount = 100  - (health - healAMount);
					health = 100;
				}
				console.log(`${hero} healed for ${healAMount} HP!`);
				heroes[hero].health = health;
				break;
		}
	}

  // print the output
	const entries = Object.entries(heroes);
	entries.forEach(([hero, obj]) => {
		console.log(hero);
		console.log(`  HP: ${obj.health}`);
		console.log(`  MP: ${obj.mana}`);
	});
}
game([
	'2',
	'Solmyr 85 120',
	'Kyrre 99 50',
	'Heal - Solmyr - 10',
	'Recharge - Solmyr - 50',
	'TakeDamage - Kyrre - 66 - Orc',
	'CastSpell - Kyrre - 15 - ViewEarth',
	'End',
]);
console.log("--------");
// game()
