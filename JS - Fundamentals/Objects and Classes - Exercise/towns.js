function printObj(arrOfStrings) {
    const towns = [];

    for (const currentTown of arrOfStrings) {
        let tokens = currentTown.split(' | ');

        const townInfo = {
            town: tokens[0],
            latitude: Number(tokens[1]).toFixed(2),
            longitude: Number(tokens[2]).toFixed(2),
        };

        towns.push(townInfo);
    }

    for (const town of towns) {
        console.log(town);
    }
}
printObj(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
