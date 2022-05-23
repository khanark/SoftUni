function hospital(input) {
  //initial values
  let period = Number(input[0]);
  let index = 1;
  let numberOfPatients = Number(input[index]);
  let doctors = 7;
  let untreated = 0;
  let treated = 0;
  // function to calculate the patients
  const calcPatients = (num) => {
    if (i % 3 === 0) {
      // every 3rd day
      if (treated < untreated) doctors++;
    }
    if (numberOfPatients <= doctors) {
      treated += numberOfPatients;
    } else {
      untreated += numberOfPatients - doctors;
      treated += doctors;
    }
  };
  // sorting data / array
  for (var i = 1; i <= period; i++) {
    calcPatients(numberOfPatients);
    index++;
    numberOfPatients = Number(input[index]);
  }
  // logging the result
  console.log(
    `Treated patients: ${treated}.\nUntreated patients: ${untreated}.`
  );
}
hospital(['4', '7', '27', '9', '1']);
// const calcPatients = patients => {
//   if (patients <= doctors) {
//     treated += patients;
//   } else {
//     untreated += patients - doctors;
//     treated += doctors;
//   }
// }
