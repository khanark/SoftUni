function printMonth(number) {
  let printMonth = '';
  switch (number) {
    case 1:
      printMonth = 'January';
      break;
    case 2:
      printMonth = 'February';
      break;
    case 3:
      printMonth = 'March';
      break;
    case 4:
      printMonth = 'April';
      break;
    case 5:
      printMonth = 'May';
      break;
    case 6:
      printMonth = 'June';
      break;
    case 7:
      printMonth = 'July';
      break;
    case 8:
      printMonth = 'August';
      break;
    case 9:
      printMonth = 'September';
      break;
    case 10:
      printMonth = 'October';
      break;
    case 11:
      printMonth = 'November';
      break;
    case 12:
      printMonth = 'December';
      break;
    default:
      printMonth = 'Error!';
  }
  console.log(printMonth);
}
printMonth();
