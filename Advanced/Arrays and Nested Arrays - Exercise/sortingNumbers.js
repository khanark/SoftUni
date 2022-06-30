function sorting(arr) {
    // sort the array and store the sorted array
    const sorted = arr.sort((a, b) => b - a)

    // loop the sorted array and shift the values
    for (let i = 0; i < sorted.length; i++) {
        if (i % 2 == 0) {
            let smallest = sorted.pop()
            sorted.splice(i, 0, smallest)
        }
    }

    //  result the result of the function
    return sorted
}
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])