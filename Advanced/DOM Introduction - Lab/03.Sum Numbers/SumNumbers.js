function calc() {
    // take the first element input
    const firstNumber = document.getElementById("num1").value

    // take the second element input
    const secondNumber = document.getElementById("num2").value

    // get the text element
    const text = document.getElementById("sum")

    // store the result
    text.value = Number(firstNumber)  + Number(secondNumber)
}
