function extract(content) {
    // take the text element
    const text = document.getElementById(content).textContent

    // create the RegExp pattern
    const pattern = /\((.+?)\)/g

    // match the pattern to the content
    let match = pattern.exec(text)

    // create collection
    const result = []

    // store all the valid values
    while(match) {
        result.push(match[1])
        match = pattern.exec(text)
    }

    // return the collection
    return result.join("; ")
}