function calcMoney(fruit, weight, price) {
    const money = (weight * price) / 1000
    console.log(`I need $${money.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}
calcMoney('apple', 1563, 2.35)