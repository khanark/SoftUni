function extractText() {
    // get the text area element
    const textArea = document.getElementById("result")

    // get the list of the items
    const items = document.querySelectorAll("li")

    // store the the values of the items elements
    const result = [...items].map(el => el.textContent)
    console.log(result);

    // push the result back in the text Area
    textArea.textContent = result.join("\n");
}