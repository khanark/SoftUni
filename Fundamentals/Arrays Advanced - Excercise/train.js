function train(arrayOfStrings) {
  let wagons = arrayOfStrings.shift().split(' ').map(Number);
  let singleWagonCapacity = Number(arrayOfStrings.shift());

  for (const commands of arrayOfStrings) {
    let currentCommand = commands.split(' ');

    if (currentCommand[0] === 'Add') {
      wagons.push(Number(currentCommand[1]));
    } else {
      currentCommand[0] = Number(currentCommand[0]);
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + currentCommand[0] <= singleWagonCapacity) {
          wagons[i] += currentCommand[0];
          break;
        }
      }
    }
  }
  console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
