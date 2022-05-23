function accountBalance(input) {
    let index = 0;
    let numbers = Number(input[index]); // Това е масива от числа с начален индекс от (index)
    let text = input[index]; // това е променлива, която е стринг и с нея проверяваме дали имаме команда, за да излезнем от цикъла
    let total = 0; // Тук складираме общата сума от числата
    while (text !== "NoMoreMoney") {
        if (numbers < 0) {
            console.log("Invalid operation!");
            break; // винаги изпозлвай break когато искаш да излезнеш от масива при дадено условие
        }
        total += numbers;
        console.log(`Increase: ${numbers.toFixed(2)}`);
        index++;
        numbers = Number(input[index]);
        text = input[index];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["120", "45.55", "-150"]);
