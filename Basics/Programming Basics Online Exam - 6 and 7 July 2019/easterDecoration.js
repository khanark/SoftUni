function storeRender(input) {
  let clientsCount = Number(input[0]);
  let index = 1;
  let productType = input[index];
  index++;
  let boughtProducts = 0;
  let price = 0;
  let itemsCounter = 0;
  let currentBill = 0;
  let bill = 0;
  for (let i = 1; i <= clientsCount; i++) {
    while (productType !== 'Finish') {
      switch (productType) {
        case 'basket':
          price += 1.5;
          break;
        case 'wreath':
          price += 3.8;
          break;
        case 'chocolate bunny':
          price += 7;
          break;
      }
      itemsCounter++;
      productType = input[index];
      index++;
    }
    if (itemsCounter % 2 === 0) price *= 0.8;
    productType = input[index];
    index++;
    bill += price;
    console.log(
      `You purchased ${itemsCounter} items for ${price.toFixed(2)} leva.`
    );
    itemsCounter = 0;
    price = 0;
  }
  calcAverage = bill => bill / clientsCount;
  console.log(
    `Average bill per client is: ${calcAverage(bill).toFixed(2)} leva.`
  );
}
storeRender(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])
