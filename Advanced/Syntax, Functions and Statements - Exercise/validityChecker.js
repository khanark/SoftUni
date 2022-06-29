function solve(x1, y1, x2, y2) {
    const result = (x1, y1, x2, y2) => {
        const number = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

        if (Number.isInteger(number)) {
            return "valid"
        } else {
            return "invalid"
        }
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${result(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${result(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result(x1, y1, x2, y2)}`);
}
solve(2, 1, 1, 1)