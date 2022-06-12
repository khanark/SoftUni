function trackTargets(arr) {
  // create initial array and counter
	let targets = arr.shift().split(' ').map(Number);
  let shotTargets = 0

  // loop the indexes
	while (arr[0] !== 'End') {
		const index = Number(arr.shift());

    // if there is such target on the given index
		if (targets.includes(targets[index])) {
			const value = targets[index];
			targets[index] = -1;
      shotTargets++

      // implementing the increase - reduce logic
			for (let i = 0; i < targets.length; i++) {
				if (targets[i] !== -1) {
					if (targets[i] > value) {
						targets[i] -= value;
					} else if (targets[i] <= value) {
						targets[i] += value;
					}
				}
			}
		}
	}

  // print the output
  console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ")}`);
}
trackTargets((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
);
