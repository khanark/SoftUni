function printBoard(n) {
  let color = 'white';

  console.log('<div class="chessboard">');

  for (let i = 1; i <= n; i++) {
    i % 2 === 1 ? (color = 'white') : (color = 'black');
    console.log('  <div>');

    for (let j = 1; j <= n; j++) {
      // checking colors, then printing (using ternary operator)
      color === 'white' ? (color = 'black') : (color = 'white');
      console.log(`    <span class="${color}"></span>`);
    }

    console.log('  </div>');
  }
  console.log('</div>');
}
printBoard(3);
