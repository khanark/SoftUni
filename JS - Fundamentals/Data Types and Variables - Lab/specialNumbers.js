function isSpecial(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    let num = i.toString();

    for (let j = 0; j < num.length; j++) {
      sum += Number(num[j]);
    }
    switch (sum) {
      case 5:
      case 7:
      case 11:
        console.log(`${i} -> True`);
        break;
      default:
        console.log(`${i} -> False`);
        break;
    }
    
    sum = 0
  }
}
isSpecial(15);
