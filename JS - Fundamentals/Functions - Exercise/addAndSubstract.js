function result(num1, num2, num3) {
  const add = (num1, num2) => num1 + num2;
  const substract = (addResult, finalNumber) => addResult - finalNumber;

  let result = add(num1, num2);
  let finalResult = substract(result, num3);
  
  console.log(finalResult);
}
result(23, 6, 10);
