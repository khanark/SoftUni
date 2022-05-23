
function calcPollution(arr, forces) {
  const map = [];

  for (const rows of arr) {
    map.push(rows.split(' ').map(Number));
  }

  for (const force of forces) {
    let [currentForce, index] = force.split(' ');
    index = Number(index);

    switch (currentForce) {
      case 'breeze':
        const rowIndex = index;
        for (let mapIndex = 0; mapIndex < map.length; mapIndex++) {
          map[rowIndex][mapIndex] -= 15
          map[rowIndex][mapIndex] = Math.max(0, map[rowIndex][mapIndex])
        }
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
          map[row][column] -= 20
          map[row][column] = Math.max(0, map[row][column]);
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
