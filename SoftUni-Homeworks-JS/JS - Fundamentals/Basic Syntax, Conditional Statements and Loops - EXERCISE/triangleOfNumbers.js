function printTriangle(number) {
  for (let i = 1; i <= number; i++) {
    let print = '';
    for (let j = 1; j <= i; j++) {
      print += `${i} `;
    }
    console.log(print);
  }
}
printTriangle(5);
