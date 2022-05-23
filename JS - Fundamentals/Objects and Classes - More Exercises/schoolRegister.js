function sortRegister(arr) {
	let register = {};

	for (const line of arr) {
		const tokens = line.split(', ');
		const studentName = tokens[0].split(' ').pop();
		const stundentGrade = Number(tokens[1].split('').pop());
		const graduatedWithAverage = Number(tokens[2].split(' ').pop());

		if (graduatedWithAverage >= 3) {
			if (!register.hasOwnProperty(stundentGrade)) {
				register[stundentGrade] = {
					name: [studentName],
					average: [graduatedWithAverage],
				};
			} else {
				register[stundentGrade].name.push(studentName);
				register[stundentGrade].average.push(graduatedWithAverage);
			}
		}
	}
	for (const grade in register) {
		const student = register[grade];
		console.log(`${Number(grade) + 1} Grade`);
		console.log(`List of students: ${student.name.join(', ')}`);
		const averageNote =
			student.average.reduce((a, b) => a + b) / student.average.length;
		console.log(
			`Average annual score from last year: ${averageNote.toFixed(2)}`
		);
		console.log(' ');
	}
}
sortRegister([
	'Student name: George, Grade: 5, Graduated with an average score: 2.75',
	'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
	'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
	'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
	'Student name: John, Grade: 9, Graduated with an average score: 2.90',
	'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
	'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15',
]);
