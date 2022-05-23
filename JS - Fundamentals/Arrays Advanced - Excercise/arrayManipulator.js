function manipulateArray(arr, commandsArr) {
  for (let commands of commandsArr) {
    let token = commands.split(' ');
    let command = token[0];

    token[1] = Number(token[1]);
    token[2] = Number(token[2]);

    const add = () => {
      arr.splice(token[1], 0, token[2]);
    }

    const addMany = () => {
      let numbers = token.slice(2, token.length).map(Number);
      for (let i = 0; i < numbers.length; i++) {
        arr.splice(token[1], 0, numbers[i]);
        token[1]++;
      }
    }

    const contains = () => {
      let isFound = false;
        for (let num of arr) {
          if (num == token[1]) {
            console.log(arr.indexOf(num));
            isFound = true;
            break;
          }
        }
        if (!isFound) {
          console.log('-1');
        }
    }

    const remove = () => {
      arr.splice(token[1], 1);
    }

    const shift = () => {
      for (let i = 0; i < token[1]; i++) {
        let shifted = arr.shift();
        arr.push(shifted);
      }
    }

    const sumPairs = () => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          let secondNumber = arr.splice(j, 1)
          arr[i] = arr[i] + secondNumber[0]
          break
        }
      }
    }

    switch (command) {
      case 'add': add(); break;
      case 'addMany': addMany(); break;
      case 'contains': contains(); break;
      case 'remove': remove(); break;
      case 'shift': shift(); break;
      case 'sumPairs': sumPairs(); break;
      case 'print': console.log(`[ ${arr.join(', ')} ]`); break;
    }
  }
}
manipulateArray([2, 2, 4, 4, 5], ['sumPairs', 'print']);