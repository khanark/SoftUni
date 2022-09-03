class CarDealership {
    constructor(name) {
        this.name = name;
        this.avaibleCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        const isValid =
            model != '' &&
            Number.isInteger(horsepower) &&
            horsepower >= 0 &&
            price >= 0 &&
            mileage >= 0;

        if (!isValid) {
            throw new Error('Invalid input!');
        } else {
            this.avaibleCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
                2
            )} km - ${price.toFixed(2)}$`;
        }
    }

    sellCar(model, desiredMileage) {
        const car = this.avaibleCars.find(car => car.model == model);
        if (!car) {
            throw new Error(`${model} was not found!`);
        }

        if (car.mileage > desiredMileage) {
            const difference = car.mileage - desiredMileage;
            car.price *= difference <= 40000 ? 0.95 : 0.9;
        }
        const carIndex = this.avaibleCars.find(car => car.model == model);
        this.avaibleCars.splice(carIndex, 1);
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: car.price,
        });
        this.totalIncome += car.price;
        return `${car.model} was sold for ${car.price.toFixed(2)}$`;
    }

    currentCar() {
        if (this.avaibleCars.length) {
            const avaibleCars = this.avaibleCars.map(
                car =>
                    `---${car.model} - ${
                        car.horsepower
                    } HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(
                        2
                    )}$`
            );
            return `-Available cars:\n${avaibleCars.join('\n')}`;
        } else {
            return 'There are no available cars';
        }
    }

    salesReport(criteria) {
        // sorting the sold cars
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error('Invalid criteria!');
        }
        let sorted;
        if (criteria == 'horsepower') {
            sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else {
            sorted = this.soldCars.sort((a, b) =>
                a.model.localeCompare(b.model)
            );
        }

        const soldCarsInfo = sorted.map(
            car =>
                `---${car.model} - ${
                    car.horsepower
                } HP - ${car.soldPrice.toFixed(2)}$`
        );
        const output = [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(
                2
            )}$`,
            `-${this.soldCars.length} cars sold:`,
            `${soldCarsInfo.join('\n')}`,
        ];

        return output.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 0, -1);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
