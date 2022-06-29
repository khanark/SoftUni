function takeTheBiggestElement(arr) {
    let newArr = arr[0]

    for (let i = 1; i < arr.length; i++) {
        newArr = newArr.concat(arr[i])
    }
    
    // take the biggest element from the array
    const result = Math.max(...newArr)

    // return the result of the function
    return result
}
takeTheBiggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]

)