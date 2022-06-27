function findLargest(num1, num2, num3) {
	let largestNumber = 0;

	if (num1 > num2 && num1 > num3) {
		largestNumber = num1;
	} else if (num2 > num1 && num2 > num3) {
		largestNumber = num2;
	} else {
		largestNumber = num3;
	}

	console.log(`The largest number is ${largestNumber}.`);
}
findLargest(5, -3, 16);
