function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let destinationPrice = Number(input[index]);
    index++;
    let savings = Number(input[index]);
    let savingSum = 0;
    let gotMoney = false;

    while (destination !== 'End') {
        gotMoney = true;
        while (savingSum < destinationPrice) {
            savingSum += savings;
            index++;
            savings = Number(input[index]);
            gotMoney = true;
        }
        if (gotMoney) {
            console.log(`Going to ${destination}!`);
            savingSum = 0;
        }
        destination = input[index];
        index++;
        destinationPrice = Number(input[index]);
        index++;
        savings = Number(input[index]);
    }
}

traveling([
    'France',
    '2000',
    '300',
    '300',
    '200',
    '400',
    '190',
    '258',
    '360',
    'Portugal',
    '1450',
    '400',
    '400',
    '200',
    '300',
    '300',
    'Egypt',
    '1900',
    '1000',
    '280',
    '300',
    '500',
    'End',
]);
