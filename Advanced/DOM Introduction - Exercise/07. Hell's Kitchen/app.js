function solve() {
	document.querySelector('#btnSend').addEventListener('click', onClick);

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
			restaurants[restaurantName].bestSalary = Math.max(
				...restaurants[restaurantName].workers.map(
					el => el.split(' ')[1]
				)
			);
			// calculate the average salary // income
			restaurants[restaurantName].averageSalary =
				restaurants[restaurantName].workers
					.map(el => el.split(' ')[1])
					.reduce((a, b) => Number(a) + Number(b)) /
				restaurants[restaurantName].workers.length;
		}
		// get the best restaurant
		const best = Object.entries(restaurants).sort(
			(a, b) => b[1].averageSalary - a[1].averageSalary
		)[0];
		const [name, obj] = best;

		// render the best restaurant
		bestRestaurant.textContent = `Name: ${name} Average Salary: ${obj.averageSalary.toFixed(
			2
		)} Best Salary: ${obj.bestSalary.toFixed(2)}`;

		// render the workers
		const sortedBySalaries = obj.workers
			.map(el => el.split(' '))
			.sort((a, b) => b[1] - a[1]);

		sortedBySalaries.forEach(el => {
			const [name, salary] = el;
			workersEl.textContent += `Name: ${name} With Salary: ${salary} `;
		});
	}
}
