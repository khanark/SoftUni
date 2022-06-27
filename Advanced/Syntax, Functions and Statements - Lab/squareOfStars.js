function printRectangle(number) {
    let result = "*".repeat(number).split("").join(" ")
    while (number) {
        console.log(result);
        number--
    }
}
printRectangle(3)