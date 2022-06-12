function findPlace(arr) {
	// create init values
	let waitingPeople = Number(arr.shift());
	const wagons = arr.shift().split(' ').map(Number);

	// implement the logic of each wagon
	for (let i = 0; i < wagons.length; i++) {
		while (wagons[i] < 4 && waitingPeople > 0) {
			wagons[i]++;
			waitingPeople--;
		}
	}

	// print the output
	for (const wagon of wagons) {
		if (wagon < 4) {
			console.log('The lift has empty spots!');
			break;
		}
		if (waitingPeople > 0) {
			console.log(
				`There isn't enough space! ${waitingPeople} people in a queue!`
			);
			break;
		}
	}
	console.log(wagons.join(' '));
}
findPlace(['15', '0 0 0 0 0']);
