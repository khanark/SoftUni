function rotateArr(arr, rotations) {
    // loop the array
    for (let i = 1; i <= rotations; i++) {

        // store the last popped value of the array
        const removedElement = arr.pop()

        // unshift the removed values to the beginning of the array
        arr.unshift(removedElement)
    }

    // print the output
    console.log(arr.join(" "));
}
rotateArr(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)