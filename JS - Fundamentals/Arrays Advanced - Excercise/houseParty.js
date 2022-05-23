function keepTrack(arr) {
  let guestList = [];

  for (let i = 0; i < arr.length; i++) {
    let phrase = arr[i];
    let guest = phrase.split(' ');
    let flag = false;

    if (phrase.includes('is going')) {
      for (let j = 0; j < guestList.length; j++) {
        if (guestList[j] === guest[0]) {
          console.log(`${guest[0]} is already in the list!`);
          flag = true;
          break;
        }
      }
      if (!flag) {
        guestList.push(guest[0]);
      }
    } else if (phrase.includes('is not going')) {
      for (let j = 0; j < guestList.length; j++) {
        if (guestList[j] === guest[0]) {
          guestList.splice(guestList.indexOf(guest[0]), 1);
          flag = true;
          break;
        }
      }
      if (!flag) {
        console.log(`${guest[0]} is not in the list!`);
      }
    }
  }
  console.log(guestList.join('\n'));
}
keepTrack([
  'Tom is going!',
  'Annie is going!',
  'Tom is going!',
  'Garry is going!',
  'Jerry is going!',
]);
