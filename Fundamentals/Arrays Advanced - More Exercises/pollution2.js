
function calcPollution(arr, forces) {
  const map = [];

  const breeze = (index) => {
    map[index].forEach((num) => num -= 15);
  };


  for (const rows of arr) {
    map.push(rows.split(' ').map(Number));
  }

  for (const force of forces) {
    // eslint-disable-next-line prefer-const
    let [currentForce, index] = force.split(' ');
    index = Number(index);

    // switching by the current force name
    switch (currentForce) {
      case 'breeze':
        const rowIndex = index;
        breeze(rowIndex);
        break;
      case 'smog':
        const value = index;
        for (let row = 0; row < map.length; row++) {
          for (let col = 0; col < map.length; col++) {
            map[row][col] += value;
          }
        }
        break;
      case 'gale':
        const column = index;
        for (let row = 0; row < map.length; row++) {
          for (let col = 0; col < map.length; col++) {
            if (col === column) {
              map[row][col] -= 20;
              if (map[row][col] < 0) {
                map[row][col] = 0;
              }
            }
          }
        }
        break;
    }
  }
  let printCoordinates = '';
  let flag = false;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      const currentValue = map[i][j];
      if (currentValue >= 50) {
        flag = true;
        printCoordinates += `[${i}-${j}], `;
      }
    }
  }
  printCoordinates = printCoordinates.substring(0, printCoordinates.length - 2);
  if (flag) {
    console.log(`Polluted areas: ${printCoordinates}`);
  } else {
    console.log('No polluted areas');
  }
}

calcPollution(
  ['5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
  ['breeze 1', 'gale 2', 'smog 35'],

);
