function sail(input) {
  // create collection
	const targetedCities = {};

  // parse the input and store the data
	while (input[0] !== 'Sail') {
		const [city, population, gold] = input.shift().split('||');
		if (!targetedCities.hasOwnProperty(city)) {
			targetedCities[city] = {
				population: Number(population),
				treasury: Number(gold),
			};
		} else {
			targetedCities[city].population += Number(population);
			targetedCities[city].treasury += Number(gold);
		}
	}

  // edit the stored collection
	while (input[0] !== 'End') {
		let [stage, city, people, gold] = input.shift().split('=>');

		if (stage == 'Prosper') {
			gold = people;
			if (Number(gold) < 0) {
				console.log('Gold added cannot be a negative number!');
			} else {
				targetedCities[city].treasury += Number(gold);
				console.log(
					`${gold} gold added to the city treasury. ${city} now has ${targetedCities[city].treasury} gold.`
				);
			}
		} else if (stage == 'Plunder') {
			console.log(
				`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`
			);
			targetedCities[city].population -= people;
			targetedCities[city].treasury -= gold;

			if (
				targetedCities[city].population <= 0 ||
				targetedCities[city].treasury <= 0
			) {
				console.log(`${city} has been wiped off the map!`);
				delete targetedCities[city];
			}
		}
	}

	const settlements = Object.keys(targetedCities).length;

  // print the output
  if (settlements > 0) {
    console.log(`Ahoy, Captain! There are ${settlements} wealthy settlements to go to:`);
    for (const [name, obj] of Object.entries(targetedCities)) {
      console.log(`${name} -> Population: ${obj.population} citizens, Gold: ${obj.treasury} kg`);
    }
  } else {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
  }
}
sail([
	'Nassau||95000||1000',
	'San Juan||930000||1250',
	'Campeche||270000||690',
	'Port Royal||320000||1000',
	'Port Royal||100000||2000',
	'Sail',
	'Prosper=>Port Royal=>-200',
	'Plunder=>Nassau=>94000=>750',
	'Plunder=>Nassau=>1000=>150',
	'Plunder=>Campeche=>150000=>690',
	'End',
]);
