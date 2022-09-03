class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error('Not enough space in the garden.');
    } else {
      const plantInfo = {
        plantName,
        spaceRequired,
        ripe: false,
        quantity: 0,
      };
      this.plants.push(plantInfo);
      this.spaceAvailable -= +spaceRequired;

      return `The ${plantName} has been successfully planted in the garden.`;
    }
  }

  ripenPlant(plantName, quantity) {
    const plant = this.plants.find(plant => plant.plantName == plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    } else if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    } else if (quantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    } else {
      plant.ripe = true;
      plant.quantity += +quantity;

      if (quantity == 1) {
        return `${quantity} ${plantName} has successfully ripened.`;
      } else {
        return `${quantity} ${plantName}s have successfully ripened.`;
      }
    }
  }

  harvestPlant(plantName) {
    const plant = this.plants.find(plant => plant.plantName == plantName);
    const plantIndex = this.plants.findIndex(
      plant => plant.plantName == plantName
    );

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    } else if (!plant.ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    } else {
      this.plants.splice(plantIndex, 1);
      this.storage.push({
        plantName: plant.plantName,
        quantity: +plant.quantity,
      });
      this.spaceAvailable += +plant.spaceRequired
      return `The ${plantName} has been successfully harvested.`;
    }
  }

  generateReport() {
    const gardenPlants = this.plants.map(plant => plant.plantName);

    const plantStorage =
      this.storage.length == 0
        ? 'Plants in storage: The storage is empty.'
        : `Plants in storage: ${this.storage.sort((a,b) => a.plantName - b.plantName)
            .map(plant => `${plant.plantName} (${plant.quantity})`)
            .join(', ')}`;
    const output = [
      `The garden has ${this.spaceAvailable} free space left.`,
      `Plants in the garden: ${gardenPlants.join(', ')}`,
      plantStorage,
    ];
    return output.join('\n');
  }
}

//Testing generateReport
let myGarden = new Garden(250);

console.log(myGarden.addPlant("apple", 20))// "The apple has been successfully planted in the garden.";
console.log(myGarden.addPlant("orange", 200))// "The orange has been successfully planted in the garden.";
console.log(myGarden.addPlant("raspberry", 10))// "The raspberry has been successfully planted in the garden.";
console.log(myGarden.ripenPlant("apple", 10))// "10 apples have successfully ripened.");
console.log(myGarden.ripenPlant("orange", 1))// "1 orange has successfully ripened.";
console.log(myGarden.harvestPlant("orange"))// "The orange has been successfully harvested.";
console.log(myGarden.generateReport())// "The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)";