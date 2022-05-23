let obj = {};

let productOne = { name: 'Cucamber', price: 1.5, quantity: 15 };

obj[productOne.name] = { name: 'Cucamber' };
obj[productOne.name].price = productOne.price;

console.log(JSON.stringify(obj));

let name = 'Cucamber';
console.log(obj[name]);
