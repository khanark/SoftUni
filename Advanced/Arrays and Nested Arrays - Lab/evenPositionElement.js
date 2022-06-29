function findEven(arr) {
    // filter the array by the index, check if the index is even
    const result = arr.filter((el, index) => index % 2 === 0)

    // print the output
    console.log(result.join(" "));
}
findEven(['20', '30', '40', '50', '60'])