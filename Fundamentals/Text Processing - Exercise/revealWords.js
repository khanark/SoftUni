function revealWord(string, template) {
    // creating array of words to look for in the sentence
    const strArr = string.split(", ")

    // looping through the words of the sentence
    for (const currentWord of strArr) {

        // replacing the words in the sentence
        template = template.replace("*".repeat(currentWord.length), currentWord)
    }

    // printing the output
    console.log(template);
}
revealWord('great, learning',
'softuni is ***** place for ******** new programming languages'
)
