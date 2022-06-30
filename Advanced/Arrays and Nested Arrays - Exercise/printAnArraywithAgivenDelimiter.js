function printWithDelimiter(arr, delimiter) {
    // create the result array and join by the given delimiter
    const result = arr.join(delimiter)

    // print the output
    console.log(result);
}
printWithDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)