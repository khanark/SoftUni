function solve(arr) {
    const fruitCollection = new Map();
    const bottleCollection = new Map();

    arr.forEach(line => {
        let [fruit, quantity] = line.split(' => ');
        quantity = Number(quantity);
        let bottles = 0;

        if (!fruitCollection.has(fruit)) {
            fruitCollection.set(fruit, quantity);
        } else {
            const oldValue = fruitCollection.get(fruit);
            const newValue = oldValue + quantity;
            fruitCollection.set(fruit, newValue);
        }

        let value = fruitCollection.get(fruit);
        let flag = false;
        while (value >= 1000) {
            value -= 1000;
            bottles++;
            flag = true;
        }
        fruitCollection.set(fruit, value);

        if (flag == true) {
            if (!bottleCollection.has(fruit)) {
                bottleCollection.set(fruit, bottles);
            } else {
                const oldValue = bottleCollection.get(fruit);
                const newValue = oldValue + bottles;
                bottleCollection.set(fruit, newValue);
            }
        }
    });

    Array.from(bottleCollection.entries()).forEach(entry =>
        console.log(`${entry[0]} => ${entry[1]}`)
    );
}

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',
]);

console.log('----------------------------------------');
solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549',
]);
