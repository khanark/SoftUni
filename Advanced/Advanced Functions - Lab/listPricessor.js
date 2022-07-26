function solve(arr) {
    // create object with all the functionality
    const result = {
        values: [],
        add(string) {
            this.values.push(string);
        },
        remove(string) {
            this.values = this.values.filter(el => el != string);
        },
        print() {
            console.log(this.values.join(','));
        },
    };

    // call the corresponding functionality (method)
    arr.forEach(line => {
        const [command, value] = line.split(' ');
        result[command](value);
    });
}
solve([
    'add again',
    'add again',
    'remove again',
    'print',
    'add again',
    'print',
]);
