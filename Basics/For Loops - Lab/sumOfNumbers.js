function sumOfNumbers(input) {
    let n = Number(input[0]);
    let textN = '' + n;
    let sum = 0;
    for (let i = 0; i < textN.length; i++) {
        sum += Number(textN[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(['0564891019']);
