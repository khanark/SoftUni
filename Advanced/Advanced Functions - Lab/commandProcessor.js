function solution() {
    // create empty string to work with
    let str = '';

    // create functionality
    const append = (string) => (str += string);
    const removeStart = (index) => (str = str.slice(index));
    const removeEnd = (index) => (str = str.slice(0, -index));
    const print = () => console.log(str);

    // create object with all the functions // functionality
    const result = {
        append,
        removeEnd,
        removeStart,
        print,
    };

    // return functionality
    return result;
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
