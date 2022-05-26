function countStrings(string, occurrence) {
  let counter = 0
  const sentence = string.split(' ')
  for (const word of sentence) {
    if (word === occurrence) {
      counter++;
    }
  }
  console.log(counter);
}
countStrings('This is a word and it also is a sentence',
'is'
)