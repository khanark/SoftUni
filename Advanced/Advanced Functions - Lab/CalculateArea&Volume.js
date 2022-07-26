function solve(area, vol, input) {
    // parse the input
    const result = JSON.parse(input).map((obj) => ({
        // return the newly created Object
        area: area.call(obj),
        volume: vol.call(obj),
    }));

    // return the result of the function
    return result;
}
solve(
    area,
    vol,
    `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}
