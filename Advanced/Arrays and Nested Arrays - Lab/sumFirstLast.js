function sumFirstLast(arr) {
    // take the first and the last values from the array
    const firstNum = Number(arr[0])
    const secondNum = Number(arr[arr.length - 1])

    // sum both values
    const sum = firstNum + secondNum

    // print the output
    console.log(sum);
}
sumFirstLast(['20', '30', '40'])