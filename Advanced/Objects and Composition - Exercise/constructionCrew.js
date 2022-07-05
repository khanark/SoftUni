function modifyWorker(worker) {
	// check if the worker is dizzy
	if (worker.dizziness) {
		// if the worker is dizzy give him some water
		const amountOfWater = worker.weight * 0.1 * worker.experience;
		worker.levelOfHydrated = amountOfWater;
		worker.dizziness = false;
	}

	// return the result of the function
	return worker;
}
modifyWorker({
	weight: 80,
	experience: 1,
	levelOfHydrated: 0,
	dizziness: true,
});
