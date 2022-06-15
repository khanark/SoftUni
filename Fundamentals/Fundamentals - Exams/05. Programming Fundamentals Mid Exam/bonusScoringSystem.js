function calcBonus(arr) {
	// parse the input
	const [numberOfStudents, numberOfLectures, additionalBonus] = arr
		.splice(0, 3)
		.map(Number);
  let maxBonus = 0
  let maxAt = 0

  // get the student with the maxBonus and store its attendances
  for (let i = 0; i < numberOfStudents; i++) {
    const attendances = arr[i]
    const totalBonus = (attendances / numberOfLectures) * (5 + additionalBonus)

    if (maxBonus <= totalBonus) {
      maxBonus = totalBonus
      maxAt = attendances
    }
  }

  // print the output
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAt} lectures.`);
}
calcBonus([
	'1',
	'30',
	'14',
	'8',
	'23',
	'27',
	'28',
	'15',
	'17',
	'25',
	'26',
	'5',
	'18',
]);
