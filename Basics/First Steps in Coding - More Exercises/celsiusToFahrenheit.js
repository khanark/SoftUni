function celsiusToFahrenheit(input) {
    const celsius = Number(input[0])
    const fahrenheit = celsius * 1.8000 + 32.002
    console.log(fahrenheit.toFixed(2))
}
celsiusToFahrenheit(["25"])