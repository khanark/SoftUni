function sortNames(names) {
    // sort the array with names alphabetically
    const sortedNames = names.sort((a, b) => a.localeCompare(b))

    // print the output
    for (let i = 0; i <= sortedNames.length; i++) {
        if (i + 1 > sortedNames.length) break
        console.log(`${i + 1}.${sortedNames[i]}`);
    }
}
sortNames(["John", "Bob", "Christina", "Ema"])