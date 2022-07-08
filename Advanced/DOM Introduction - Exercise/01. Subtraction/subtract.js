function subtract() {
	// get the numbers
	const firstNumber = document.getElementById('firstNumber').value;
	const secondNumber = document.getElementById('secondNumber').value;

	// do the math
	const numberResult = Number(firstNumber) - Number(secondNumber);

	// render the result
	const result = document.getElementById('result');
	result.textContent = numberResult;
}
