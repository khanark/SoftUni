function revealWord(string, template) {
    const strArr = string.split(", ")
    for (const currentWord of strArr) {
        template = template.replace("*".repeat(currentWord.length), currentWord)
    }
    console.log(template);
}
revealWord('great, learning',
'softuni is ***** place for ******** new programming languages'
)
