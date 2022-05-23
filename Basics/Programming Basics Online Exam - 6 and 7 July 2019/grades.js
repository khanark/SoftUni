function grades(input) {
  let students = Number(input[0]);
  let between4to499 = 0;
  let between3to399 = 0;
  let topStudents = 0;
  let failed = 0;
  let gradesSum = 0;

  for (let i = 1; i <= students; i++) {
    let grades = Number(input[i]);
    if (grades < 3) {
      failed++;
    } else if (grades >= 3 && grades < 4) {
      between3to399++;
    } else if (grades >= 4 && grades < 5) {
      between4to499++;
    } else {
      topStudents++;
    }
    gradesSum += grades;
  }
  const calcAverage = grades => (grades / students) * 100;
  console.log(`Top students: ${calcAverage(topStudents).toFixed(2)}%`);
  console.log(
    `Between 4.00 and 4.99: ${calcAverage(between4to499).toFixed(2)}%`
  );
  console.log(
    `Between 3.00 and 3.99: ${calcAverage(between3to399).toFixed(2)}%`
  );
  console.log(`Fail: ${calcAverage(failed).toFixed(2)}%`);
  console.log(`Average: ${(gradesSum/students).toFixed(2)}`);
}
grades([
  '6',
  '2',
  '3',
  '4',
  '5',
  '6',
  '2.2'
]);
