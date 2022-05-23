function sumNumbers(input) {
    let goalNumber = Number(input[0]);
    let index = 1;
    let currentNumber = Number(input[index]);
    let currentSum = 0; // заради тази променлива, която е ЧИСЛО, трябва да парснеме всички останали променливи в числа, за да не принтира конзолата NaN
    while (currentSum < goalNumber) {
        currentSum += currentNumber;
        index++;
        currentNumber = Number(input[index]);
    }
    console.log(currentSum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
