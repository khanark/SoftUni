function deliver(arr) {
	// parse the input
	let cupid = 0;
	const neighborhood = arr.shift().split('@').map(Number);

	// loop the commands
	for (const line of arr) {
		if (line === 'Love!') break;

		const jumpLength = Number(line.slice(-1));
		let cupidsJump = cupid + jumpLength;

		// check  if the jump is out of boundaries if so start the logic again else continue
		cupidsJump >= neighborhood.length ? StartAgain(Jump) : Jump();

		function Jump() {
			if (neighborhood[cupidsJump] === 0) {
				console.log(`Place ${cupidsJump} already had Valentine's day.`);
			}
			if (neighborhood[cupidsJump] > 0) {
				neighborhood[cupidsJump] -= 2;
				if (neighborhood[cupidsJump] === 0) {
					console.log(`Place ${cupidsJump} has Valentine's day.`);
				}
			}
			cupid = cupidsJump;
		}

		function StartAgain(func) {
			cupidsJump = 0;
			return func();
		}
	}

	// print the output
	console.log(`Cupid's last position was ${cupid}.`);
	if (neighborhood.every(house => house === 0)) {
		console.log('Mission was successful.');
	} else {
		const failedPlaces = neighborhood.filter(place => place !== 0).length;
		console.log(`Cupid has failed ${failedPlaces} places.`);
	}
}
deliver(['0', 'Jump 1', 'Jump 2', 'Love!']);
