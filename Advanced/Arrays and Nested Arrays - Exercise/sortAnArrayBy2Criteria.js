function sortBy2Criteria(arr) {
    // sort the initial array by length and if the length is equal, sort alphabetically
    const result = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))

    // print the output
    result.forEach(el => console.log(el))
}
sortBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']

)