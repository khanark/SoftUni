function operate(num1, num2, string) {
    let result = 0

    switch (string) {
        case "+": result = num1 + num2; break
        case "-": result = num1 - num2; break
        case "*": result = num1 * num2; break
        case "/": result = num1 / num2; break
        case "%": result = num1 % num2; break
        case "**": result = Math.pow(num1, num2); break
    }
    console.log(result);
}
operate(5, 6, '+')