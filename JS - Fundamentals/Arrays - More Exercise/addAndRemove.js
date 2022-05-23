function addRemove(commands) {
  let initialNumber = 1;
  let myArr = [];

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];

    if (command === 'add') {
      myArr.push(initialNumber);
    } else if (command === 'remove') {
      myArr.pop();
    }
    initialNumber++;
  }
  let length = myArr.length;
  
  if (length != 0) {
    console.log(myArr.join(' '));
  } else {
    console.log('Empty');
  }
}
addRemove(['remove', 'remove', 'remove']);
