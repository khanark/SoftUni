function findPassword(strings) {
  let isntFound = false;
  for (let i = 1; i <= strings.length; i++) {
    let reversedPassword = strings[0].split('').reverse().join('');
    if (strings[i] === reversedPassword) {
      console.log(`User ${strings[0]} logged in.`);
      break;
    } else if (i === 4) {
      isntFound = true;
      break;
    } else {
      console.log(`Incorrect password. Try again.`);
    }
  }
  if (isntFound) {
    console.log(`User ${strings[0]} blocked!`);
  }
}
findPassword(['Acer', 'login', 'go', 'let me in', 'recA']);