function calcTime(arr) {
  // parse the input
	let students = Number(arr.pop());
	const studentsPerHour = arr.map(Number).reduce((a, b) => a + b);
	let answeredStudents = 0;
	let hours = 0;

  // implement the logic as following:
  // - check if the answered students are less then the students to be answered and if so add an hour
  // - every 4th hour there is a lunch break
  while (answeredStudents < students) {
    hours++
    if (hours % 4 == 0 && hours != 0) {
      continue
    } else {
    answeredStudents += studentsPerHour
    }
  }

  // print the output
	console.log(`Time needed: ${hours}h.`);
}
calcTime(['3','2','5','40']);
