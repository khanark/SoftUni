function numbersSequence(n, k) {
  let lengthOfSequence = n;
  let arr = [1];

  for (let i = 2; i <= lengthOfSequence; i++) {
    let lastK = arr.slice(-k);
    console.log(lastK);
    let sum = 0;
    for (let element of lastK) {
      sum += element;
    }
    arr.push(sum);
  }
  console.log(arr.join(' '));
}
numbersSequence(8, 2);
