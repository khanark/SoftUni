function extract(string) {
    let result = string.match(/\w+/g)
    result = result.map(el => el.toUpperCase())
    console.log(result.join(", "));
}
extract('hello')