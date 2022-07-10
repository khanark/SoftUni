function solve() {
	document.querySelector('#btnSend').addEventListener('click', onClick);

	const calcAverageSalary = arr => {
		return (
			arr.workers
				.map(el => el.split(' ')[1])
				.reduce((a, b) => Number(a) + Number(b)) / arr.workers.length
		);
	};

	const getTheHighestSalary = arr => {
		return (arr.bestSalary = Math.max(
			...arr.workers.map(el => el.split(' ')[1])
		));
	};

	function onClick() {
		const input = JSON.parse(
			document.getElementsByTagName('textarea')[0].value
		);
		const bestRestaurant = document.getElementsByTagName('p')[0];
		const workersEl = document.getElementsByTagName('p')[1];
		workersEl.textContent = '';
		bestRestaurant.textContent = '';
		// create collection
		const restaurants = {};

		// parse the input
		for (const line of input) {
			let [restaurantName, workers] = line.split(' - ');
			workers = workers.split(', ');

			if (!restaurants.hasOwnProperty(restaurantName)) {
				restaurants[restaurantName] = {
					workers: workers,
					bestSalary: 0,
					averageSalary: 0,
				};
			} else {
				workers.forEach(worker =>
					restaurants[restaurantName].workers.push(worker)
				);
			}

			// calculate the best salary
			restaurants[restaurantName].bestSalary = getTheHighestSalary(
				restaurants[restaurantName]
			);

			// calculate the average salary // income
			restaurants[restaurantName].averageSalary = calcAverageSalary(
				restaurants[restaurantName]
			);
		}

		// get the best restaurant
		const best = Object.entries(restaurants).sort(
			(a, b) => b[1].averageSalary - a[1].averageSalary
		)[0];
		const [name, obj] = best;
		const { bestSalary, averageSalary, workers } = obj;

		// render the best restaurant
		bestRestaurant.textContent = `Name: ${name} Average Salary: ${averageSalary.toFixed(
			2
		)} Best Salary: ${bestSalary.toFixed(2)}`;

		// render the workers
		const sortedBySalaries = workers
			.map(el => el.split(' '))
			.sort((a, b) => b[1] - a[1]);

		sortedBySalaries.forEach(el => {
			const [name, salary] = el;
			workersEl.textContent += `Name: ${name} With Salary: ${salary} `;
		});
	}
}
