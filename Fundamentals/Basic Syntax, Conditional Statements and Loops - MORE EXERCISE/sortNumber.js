function sortNumbers(n1, n2, n3) {
	const arr = [n1, n2, n3];
	const sorted = arr.sort((a, b) => b - a);
	sorted.forEach(el => console.log(el));
}
sortNumbers(-2, 1, 3);
