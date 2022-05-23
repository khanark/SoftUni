function numbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let sum = 0;
    let res = '';
    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 9 === 0) {
            sum += i;
            res += i + '\n';
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(res);
}
