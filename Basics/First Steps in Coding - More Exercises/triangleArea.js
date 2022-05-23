function triangleArea(input) {
    const a = Number(input[0]);
    const h = Number(input[1]);
    const result = (a * h) / 2;
    console.log(result.toFixed(2));
}
triangleArea(['20', '30']);
