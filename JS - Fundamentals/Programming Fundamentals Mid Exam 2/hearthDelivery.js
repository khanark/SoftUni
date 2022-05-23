function deliver(arr) {
  const neighborhood = arr.shift().split('@').map(Number);

  for (const commands of arr) {
    const [command, jumpLength] = commands.split(' ');

    if (command === 'Love!') {
      break;
    } else {
      if (jumpLength >= neighborhood.length) {
        if ((neighborhood[0] -= 2 > 0)) {
          neighborhood[0] -= 2;
          if (neighborhood[0] === 0) {
            console.log('has valentine');
          }
        } else if ((neighborhood[0] -= 2 === 0)) {
          console.log('already had valentine');
        }
      } else {
        neighborhood[jumpLength] -= 2;
      }
    }
  }
  console.log(neighborhood);
}
deliver(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!']);
