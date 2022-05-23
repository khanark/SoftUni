function calcPyramidMats(base, increment) {
  // initial values
  let stones = 0;
  let marble = 0;
  let lapiz = 0;
  let counter = 0; 
  let step = 1;
  let j = 0;

  // Stones
  for (let i = base - 2; i >= 1; i -= 2) {
    step++;
    stones += i * i * increment;
    j = i;
  }

  //  Marble
  for (let k = base; k >= 3; k -= 2) {
    counter++;
    if (counter % 5 !== 0) {
      marble += (k * 4 - 4) * increment;
    } else {
      lapiz += (k * 4 - 4) * increment;
    }
  }

  // Height and gold
  let height = step * increment;
  let gold = j * j;

  // Printing
  console.log(`Stone required: ${Math.ceil(stones)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapiz)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
calcPyramidMats(11, 0.75);
// намираме marble след като умножим базата и от полученото извадим 4 и го умножим по икремента
// намираме камъка като от базата всеки път редуцираме 2 блокчета и го умножим по инкремента
