function treckingMania(input) {
  let index = 0;
  let groupCount = Number(input[index]);
  index++;
  let musala = 0; montblanck = 0; kilimandjaro = 0; k2 = 0; everest = 0; total = 0;
  for (let i = 1; i <= groupCount; i++) {
    let peopleCount = Number(input[index]);
    index++;
    total += peopleCount;
    if (peopleCount <= 5) {
      musala += peopleCount;
    } else if (peopleCount >= 6 && peopleCount <= 12) {
      montblanck += peopleCount;
    } else if (peopleCount >= 13 && peopleCount <= 25) {
      kilimandjaro += peopleCount;
    } else if (peopleCount >= 26 && peopleCount <= 40) {
      k2 += peopleCount;
    } else {
      everest += peopleCount;
    }
  }
  const calcPercent = (mountain) => (mountain / total) * 100;
  let mountains = [musala, montblanck, kilimandjaro, k2, everest];
  for (let i = 0; i <= mountains.length - 1; i++) {
    console.log(`${calcPercent(mountains[i]).toFixed(2)}%`);
  }
}
treckingMania(['5', '25', '41', '31', '250', '6']);
