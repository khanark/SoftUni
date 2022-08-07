function solve(arr) {
    // store the first input in a variable (our string)
    let str = arr.shift();

    // pop the last input line (because you actually don't need it)
    arr.pop();

    // forEach line call the manipulateString()
    arr.forEach(line => {
        const [command, x, i] = line.split(' ');
        console.log(manipulateString()[command](x, i));
    });

    // create manipulateString() to edit the current string
    function manipulateString() {
        return {
            Translate: (char, replacement) =>
                (str = str.split(char).join(replacement)),
            Includes: substring => (str.includes(substring) ? 'True' : 'False'),
            Start: substring => (str.startsWith(substring) ? 'True' : 'False'),
            Lowercase: () => (str = str.toLowerCase()),
            FindIndex: char => str.lastIndexOf(char),
            Remove: (startIndex, count) => {
                const strToRemove = str.substring(
                    Number(startIndex),
                    Number(startIndex) + Number(count)
                );
                str = str.replace(strToRemove, '');
                return str;
            },
        };
    }
}
solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End',
]);
