function game(string) {
  // create collection
	const player = {
		health: 100,
		bitcoins: 0,
	};

  // parse the input
	const rooms = string.split('|');

	for (let i = 0; i < rooms.length; i++) {
		const [item, value] = rooms[i].split(' ');

    // loop for each item and implement the logic behind it
		if (item == 'potion') {

			if (player.health + Number(value) > 100) {
				const healedFor = 100 - player.health
				player.health = 100;
				console.log(`You healed for ${healedFor} hp.`);
			} else {
				player.health += Number(value);
				console.log(`You healed for ${value} hp.`);
			}
			console.log(`Current health: ${player.health} hp.`);
		} else if (item == 'chest') {
			player.bitcoins += Number(value);
			console.log(`You found ${value} bitcoins.`);
		} else {
			player.health -= Number(value);

			if (player.health <= 0) {
				console.log(`You died! Killed by ${item}.`);
				console.log(`Best room: ${i + 1}`);
				return;
			} else {

				console.log(`You slayed ${item}.`);
			}
		}
	}

  // print the output if went through all the rooms and succeeded
  console.log("You've made it!");
  console.log(`Bitcoins: ${player.bitcoins}`);
  console.log(`Health: ${player.health}`);
}
game("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
