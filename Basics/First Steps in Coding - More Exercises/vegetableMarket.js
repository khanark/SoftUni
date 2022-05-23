function vegetableMarket(input) {
    const priceForVegetable = Number(input[0]);
    const priceForFruits = Number(input[1]);
    const totalPriceForvegetable = Number(input[2]);
    const totalPriceForFruits = Number(input[3]);
    const euroCourse = 1.94;
    const total =
        priceForVegetable * totalPriceForvegetable +
        priceForFruits * totalPriceForFruits;
    const total2 = total / euroCourse;

    console.log(total2.toFixed(2));
}
vegetableMarket([0.194, 19.4, 10, 10]);
