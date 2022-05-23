function energyBoost(input) {
  let fruit = input[0];
  let setType = input[1];
  let setOrder = Number(input[2]);

  let total = 0;

  switch (fruit) {
    case 'Watermelon':
      switch (setType) {
        case 'small':
          total = 2 * 56 * setOrder;
          break;
        case 'big':
          total = 5 * 28.7 * setOrder;
          break;
      }
      break;
    case 'Mango':
      switch (setType) {
        case 'small':
          total = 2 * 36.66 * setOrder;
          break;
        case 'big':
          total = 5 * 19.6 * setOrder;
          break;
      }
      break;
    case 'Pineapple':
      switch (setType) {
        case 'small':
          total = 2 * 42.1 * setOrder;
          break;
        case 'big':
          total = 5 * 24.8 * setOrder;
          break;
      }
      break;
    case 'Raspberry':
      switch (setType) {
        case 'small':
          total = 2 * 20 * setOrder;
          break;
        case 'big':
          total = 5 * 15.2 * setOrder;
          break;
      }
      break;
  }
  if (total >= 400 && total <= 1000) {
    let discount = total * 0.15;
    total -= discount;
  } else if (total > 1000) {
    discount = total * 0.5;
    total -= discount;
  }
  console.log(`${total.toFixed(2)} lv.`);
}
energyBoost(['Raspberry', 'small', '50']);
