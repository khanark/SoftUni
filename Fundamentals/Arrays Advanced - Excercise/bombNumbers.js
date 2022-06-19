function detonate(arr, specialBombArr) {
	const bombNumber = specialBombArr[0];
	const power = specialBombArr[1];

	for (let i = 0; i < arr.length; i++) {
		const currentNumber = arr[i];
		const initialBombIndex = Math.max(0, i - power);
		const bombIndexLength = power * 2 + 1;

		if (currentNumber === bombNumber) {
			arr.splice(initialBombIndex, bombIndexLength);
			i = i - 1;
		}
	}

	console.log(arr.length > 0 ? arr.reduce((a, b) => a + b) : 0);
}
detonate([1, 7, 7, 1, 2, 3], [7, 1]);
detonate([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
detonate([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
detonate([1, 1, 9, 2, 8, 3, 1], [9, 3]);
