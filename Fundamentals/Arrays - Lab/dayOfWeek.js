function printDay(n) {
  let days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  n > 7 || n < 1 ? console.log('Invalid day!') : console.log(days[n - 1]);
}
printDay(7);
