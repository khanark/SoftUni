function hospital(input) {
  let period = Number(input[0]);
  let treadedPatients = 0;
  let untreatedPatients = 0;
  let doctors = 7;

  for (let i = 1; i <= period; i++) {
    let patients = Number(input[i]);
    if (i % 3 === 0 && untreatedPatients > treadedPatients) doctors++
    if (patients >= doctors) {
      treadedPatients += doctors;
      untreatedPatients += patients - doctors;
    } else {
      treadedPatients += patients;
    }
  }
  console.log(`Treated patients: ${treadedPatients}.`);
  console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital(['4','7', '27', '9', "1"]);
