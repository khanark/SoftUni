function printSectionOfArray(arr, start, end) {
    // take the elements withing the start and end parameters
    const result = arr.slice(arr.indexOf(start), arr.indexOf(end) + 1)

    // return the result of the function
    return result
}
printSectionOfArray(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
)