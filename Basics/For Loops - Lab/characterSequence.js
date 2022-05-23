function characterSequence(input) {
  let text = String(input[0]);
  for (let i = 0; i <= text.length - 1; i++) {
    console.log(text[i]);
  }
}
characterSequence(["ice cream"])
