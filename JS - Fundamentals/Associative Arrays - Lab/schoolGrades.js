function storeStudents(arr) {
	let students = new Map();
	const calcAverage = arr => arr.reduce((a, b) => a + b) / arr.length;

	for (const line of arr) {
		const token = line.split(' ');
		const name = token.shift();
		const grades = token.map(Number);

		if (!students.has(name)) {
			students.set(name, grades);
		} else {
			let oldGrades = students.get(name);
			let newGrades = oldGrades.concat(grades);
			students.set(name, newGrades);
		}
	}
	const sorted = Array.from(students).sort((a, b) => a[0].localeCompare(b[0]));
	for (const [name, grades] of sorted) {
		console.log(`${name}: ${calcAverage(grades).toFixed(2)}`);
	}
}
storeStudents(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
console.log('--');
storeStudents(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);
