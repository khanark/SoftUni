function readingWords(input) {
    let index = 0
    let text = input[index]

    while (text !== "Stop") {

        console.log(text)
        index++
        text = input[index]
    }
}
readingWords(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
