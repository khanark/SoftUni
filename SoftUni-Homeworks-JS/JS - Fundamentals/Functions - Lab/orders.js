function calcPrice(order, count) {
  let price = 0;
  switch (order) {
    case 'coffee':
      price = 1.5;
      break;
    case 'water':
      price = 1;
      break;
    case 'coke':
      price = 1.4;
      break;
    case 'snacks':
      price = 2;
      break;
  }
  let result = price * count;
  console.log(result.toFixed(2));
}
calcPrice('coffee', 2);
