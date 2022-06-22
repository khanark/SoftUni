function deliver(arr) {
	// create the initial array
	const houses = arr.shift().split('@').map(Number);
	let jump = 0;

	// loop the input
	while (arr[0] !== 'Love!') {
		let index = arr.shift().split(" ")[1]
		index = Number(index);
		jump += index;

			if (jump >= houses.length) {
				jump = 0;
			}
			if (houses[jump] == 0) {
				console.log(`Place ${jump} already had Valentine's day.`);
			} else {
				houses[jump] -= 2;
				if (houses[jump] == 0) {
					console.log(`Place ${jump} has Valentine's day.`);
				}
			}
	}

	//print the output
	console.log(`Cupid's last position was ${jump}.`);
	const isFailed = houses.filter(el => el != 0).length > 0;

	if (isFailed) {
		const failedPlaces = houses.filter(el => el != 0).length;
		console.log(`Cupid has failed ${failedPlaces} places.`);
	} else {
		console.log('Mission was successful.');
	}
}
deliver([
	'2@2@2@2@2@2@2@2@2',
	'Jump 2',
	'Jump 2',
	'Jump 2',
	'Jump 2',
	'Jump 2',
	'Jump 2',
	'Jump 2',
	'Jump 1',
	'Love!',
]);
