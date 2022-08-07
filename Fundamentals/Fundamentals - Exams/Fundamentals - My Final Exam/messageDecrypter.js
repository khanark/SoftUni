function solve(arr) {
    // create the regExp
    const regExp =
        /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;
    let linesCount = Number(arr.shift());

    // loop and implement the logic behind decrypt()
    while (linesCount--) {
        const currentLine = arr.shift();
        console.log(decrypt(currentLine));
    }

    // create function to decrypt the line
    function decrypt(msg) {
        if (regExp.test(msg)) {
            const decryptedMessage = msg
                .match(/[0-9]+/g)
                .map(value => String.fromCharCode(value))
                .join('');
            const tag = msg.match(/[A-Za-z]+/g);
            return `${tag}: ${decryptedMessage}`;
        } else {
            return 'Valid message not found!';
        }
    }
}
solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|',
]);
