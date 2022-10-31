function solve(arr) {
  const carCollection = {};
  arr.forEach((line) => {
    const [carBrand, carModel, producedCars] = line.split(" | ");
    if (!carCollection[carBrand]) {
      carCollection[carBrand] = new Map();
    }

    if (carCollection[carBrand].has(carModel)) {
      const currentQuantity = carCollection[carBrand].get(carModel);
      const newQuantity = currentQuantity + +producedCars;
      carCollection[carBrand].set(carModel, newQuantity);
    } else {
      carCollection[carBrand].set(carModel, +producedCars);
    }
  });

  Object.entries(carCollection).forEach((car) => {
    const [carBrand, models] = car;
    console.log(carBrand);
    const modelsInfo = Array.from(models.entries()).map((model) => {
      const [name, quantity] = model;
      return `###${name} -> ${quantity}`;
    });
    console.log(modelsInfo.join("\n"));
  });
}
solve([
  "Mercedes-Benz | 50PS | 123",
  "Mini | Clubman | 20000",
  "Mini | Convertible | 1000",
  "Mercedes-Benz | 60PS | 3000",
  "Hyunday | Elantra GT | 20000",
  "Mini | Countryman | 100",
  "Mercedes-Benz | W210 | 100",
  "Mini | Clubman | 1000",
  "Mercedes-Benz | W163 | 200",
]);
