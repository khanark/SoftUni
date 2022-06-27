function solve(arr) {
	let biscuitsPerDay = Number(arr.shift());
	let countOfWorkers = Number(arr.shift());
	let competingFactory = Number(arr.shift());

	let myFactory = 0;

	for (let i = 0; i < 30; i++) {
		let production = biscuitsPerDay * countOfWorkers;
		if (i % 3 === 0) {
			production *= 0.75;
		}
		myFactory += Math.floor(production);
	}

	let diff = Math.abs(myFactory - competingFactory);
	let percentage = (diff / competingFactory) * 100;

    console.log(`You have produced ${myFactory} biscuits for the past month.`);

	if (myFactory > competingFactory) {
		console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
	} else {
		console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
	}
}
solve(['78', '8', '16000']);
