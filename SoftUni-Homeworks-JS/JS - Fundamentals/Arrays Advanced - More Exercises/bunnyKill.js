function killTheBunny(arr) {
  // initial values
  let sum = 0;
  let killedBunnies = 0;

  const coordinates = arr.pop().split(' ');

  let myArr = [];
  arr.map(row => myArr.push(row.split(',')));

  for (let i = 0; i < myArr.length; i++) {
    myArr[i] = myArr[i][0].split(' ').map(Number);
  }

  for (let i = 0; i < coordinates.length; i++) {
    let [bunnyRow, bunnyCol] = coordinates[i].split(',').map(Number);

    for (let row = 0; row < myArr.length; row++) {
      for (let col = 0; col < myArr[row].length; col++)
        if (row === bunnyRow && col === bunnyCol) {
          let explosionDamage = myArr[row][col];
          let initialBombDiapazon = Math.max(0, row - 1);
          let bombDiapazonLength = row + 1;

          for (let i = initialBombDiapazon; i <= bombDiapazonLength; i++) {
            if (myArr[i] === undefined) {
              break;
            }

            myArr[i] = myArr[i].map(function (number, index) {
              if (index === col - 1 || index === col || index === col + 1) {
                number -= explosionDamage;

                if (number < 0) {
                  return 0;
                } else {
                  return number;
                }
              } else {
                return number;
              }
            });
          }

          myArr[row][col] = explosionDamage;
        }
    }
  }

  for (let j = 0; j < myArr.length; j++) {
    sum += myArr[j].reduce((a, b) => a + b);
  }

  for (let j = 0; j < myArr.length; j++) {
    for (let number of myArr[j]) {
      if (number !== 0) {
        killedBunnies++;
      }
    }
  }
  console.log(sum);
  console.log(killedBunnies);
}
killTheBunny(['10 10 10', '10 15 10', '10 10 10', '0,0 0,1']);
