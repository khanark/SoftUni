function solve(arr) {
    const collection = {};

    arr.forEach(line => {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);
        if (!collection[brand]) {
            collection[brand] = new Map();
        }

        if (!collection[brand].has(model)) {
            collection[brand].set(model, quantity);
        } else {
            const oldValue = collection[brand].get(model);
            const newValue = oldValue + quantity;
            collection[brand].set(model, newValue);
        }
    });
    Object.entries(collection).forEach(entry => {
        const [carBrand, modelInfo] = entry;
        console.log(carBrand);
        Array.from(modelInfo.entries()).forEach(entry => {
            const [carModel, producedCars] = entry;
            console.log(`###${carModel} -> ${producedCars}`);
        });
    });
}
solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
]);
