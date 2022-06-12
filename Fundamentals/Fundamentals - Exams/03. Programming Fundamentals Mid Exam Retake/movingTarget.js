function keepTrack(arr) {
  // create the targets array
	let targets = arr.shift().split(' ').map(Number);

  // loop through the rest of the arr lines
	for (const line of arr) {
		const command = line.split(' ')[0];
		const index = parseInt(line.split(' ')[1]);
		const value = parseInt(line.split(' ')[2]);

    // create a switch for the different cases
		switch (command) {
			case 'Shoot':
				targets = shoot(targets, index, value);
				break;
			case 'Add':
				targets = add(targets, index, value);
				break;
			case 'Strike':
				targets = strike(targets, index, value);
				break;
		}
	}

  // output the result
	console.log(targets.join('|'));

  // create shoot function for the shoot case
	function shoot(arr, index, value) {
    if (index < 0 || index >= arr.length) {
      return arr;
		}
		arr[index] -= value;
		if (arr[index] <= 0) {
      arr = arr.filter((x, y) => y != index);
		}
		return arr;
	}

  // create add function for the add case
	function add(arr, index, value) {
    if (index < 0 || index >= arr.length) {
      console.log('Invalid placement!');
			return arr;
		}
		arr.splice(index, 0, value);
		return arr;
	}

  // create strike function for the strike case
	function strike(arr, index, value) {
		let leftIndex = index - value;
		let rightIndex = index + value;

		if (index >= 0 && index < arr.length) {
			if (leftIndex >= 0 && rightIndex < arr.length) {
				arr.splice(leftIndex, value + value + 1);
			} else {
				console.log('Strike missed!');
				return arr;
			}
		}
		return arr;
	}
}
keepTrack([
	'52 74 23 44 96 110',
	'Shoot 5 10',
	'Shoot 1 80',
	'Strike 2 1',
	'Add 22 3',
	'End',
]);
