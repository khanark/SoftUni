function modify(arr) {
  // create the initial values array
	let initialValues = arr.shift().split(' ').map(Number);

  // parse the input
	while (arr[0] !== 'end') {
		const line = arr.shift();
		const [command, index1, index2] = line.split(' ');

		switch (command) {
			case 'swap':
				swap(initialValues, index1, index2);
				break;
			case 'multiply':
				multiply(initialValues, index1, index2);
				break;
			case 'decrease':
        initialValues = decrease(initialValues);
				break;
      }
    }

    // create function for each command
    function swap(arr, firstVal, secondVal) {
      const swap = arr[firstVal];
      arr[firstVal] = arr[secondVal];
      arr[secondVal] = swap;
    }

    function multiply(arr, firstVal, secondVal) {
      const result = arr[firstVal] * arr[secondVal];
      arr.splice(firstVal, 1);
      arr.splice(firstVal, 0, result);
    }

    function decrease(arr) {
      arr = arr.map(n => n - 1);
      return arr
    }

  // print the output
	console.log(initialValues.join(', '));
}
modify([
	'23 -2 321 87 42 90 -123',
	'swap 1 3',
	'swap 3 6',
	'swap 1 0',
	'multiply 1 2',
	'multiply 2 1',
	'decrease',
	'end',
]);
