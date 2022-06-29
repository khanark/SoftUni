function takeSmallestTwo(arr) {
    // sort the array and take the first two smallest values
    const result = arr.sort((a, b) => a - b).splice(0, 2)

    // print the output
    console.log(result.join(" "));
}
takeSmallestTwo([3, 0, 10, 4, 7, 3])