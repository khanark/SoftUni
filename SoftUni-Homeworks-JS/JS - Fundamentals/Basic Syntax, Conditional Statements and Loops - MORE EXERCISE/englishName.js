function getName(num) {
  let number = num.toString();

  let string = '';

  switch (Number(number[number.length - 1])) {
    case 1:
      string = 'one';
      break;
    case 2:
      string = 'two';
      break;
    case 3:
      string = 'three';
      break;
    case 4:
      string = 'four';
      break;
    case 5:
      string = 'five';
      break;
    case 6:
      string = 'six';
      break;
    case 7:
      string = 'seven';
      break;
    case 9:
      string = 'nine';
      break;
    case 0:
      string = 'zero';
      break;
  }
  
  console.log(string);
}
getName([512]);
