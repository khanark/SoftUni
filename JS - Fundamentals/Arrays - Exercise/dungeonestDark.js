function printGameStory(strArray) {
  // initial values
  let health = 100;
  let coins = 0;
  let isDeath = false;
  let bestRoom = 0;
  let killer = '';

  let object = []; // array to store the monster ot the item
  let value = []; // array to store the damage or the heal values

  let myArr = strArray.toString().split('|'); // creating array to store all separated rooms of the game

  // looping through the rooms and separating items and monsters from damage and heals
  for (let i = 0; i < myArr.length; i++) {
    let element = myArr[i];
    let item = element.slice(0, element.indexOf(' '));
    let number = parseInt(element.slice(element.indexOf(' '), element.length));
    object.push(item);
    value.push(number);
  }

  for (let i = 0; i < object.length; i++) {
    let element = object[i];

    switch (element) {
      case 'potion':
        health += value[i];
        if (health > 100) {
          value[i] = 100 + value[i] - health;
          health = 100;
        }
        console.log(`You healed for ${value[i]} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      case 'chest':
        coins += value[i];
        console.log(`You found ${value[i]} coins.`);
        break;
      default:
        health -= value[i];
        if (health < 1) {
          isDeath = true;
          bestRoom = i + 1;
          killer = element;
        } else {
          console.log(`You slayed ${element}.`);
        }
        break;
    }

    if (isDeath) {
      break;
    }
  }
  
  if (isDeath) {
    console.log(`You died! Killed by ${killer}.`);
    console.log(`Best room: ${bestRoom}`);
  } else {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
printGameStory(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);
