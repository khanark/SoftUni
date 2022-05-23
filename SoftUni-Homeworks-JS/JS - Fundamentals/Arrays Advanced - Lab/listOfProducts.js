function listProducts(products) {
  console.log(products.sort().map((product, index) => `${index + 1}.${product}`).join('\n'));
}
listProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
