function calcHours(arr) {
  let studentsCount = Number(arr.pop());
  let studentsPerHour = arr.map(Number).reduce((a, b) => a + b);

  let hours = 0;
  let iteration = 0;
  let studentsLeft = studentsCount;

  while (studentsLeft > 0) {
    iteration++;
    if (iteration % 4 === 0 && iteration != 0) {
      hours++;
      continue;
    }
    studentsLeft -= studentsPerHour;
    hours++;
  }
  console.log(`Time needed: ${hours}h.`);
}
calcHours(['5', '6', '4', '20']);
calcHours(['3', '2', '5', '40']);
calcHours(['1', '2', '3', '45']);
