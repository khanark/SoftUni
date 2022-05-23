function numbersN1(input) {
  let num = Number(input[0]);
  for (let i = num; i > 0; i--) { // тук "i" започва от числото въведено от потребителя, което е равно на променливата "num"
    console.log(i);
  }
}
numbersN1(["5"]);
