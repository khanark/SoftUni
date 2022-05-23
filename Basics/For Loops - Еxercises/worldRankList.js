function worldRankList(input) {
    let index = 0;
    const tournamentCount = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;

    let finalPoints = 0;
    let averagePoints = 0;
    let tournamentsWon = 0;

    for (let i = 0; i < tournamentCount; i++) {
        let stage = input[index];
        index++;

        if (stage == "W") {
            startingPoints += 2000;
            averagePoints += 2000;
            tournamentsWon++;
        } else if (stage == "F") {
            startingPoints += 1200;
            averagePoints += 1200;
        } else if (stage == "SF") {
            startingPoints += 720;
            averagePoints += 720;
        }
    }
    finalPoints += startingPoints;
    averagePoints = averagePoints / tournamentCount;
    tournamentsWon = (tournamentsWon / tournamentCount) * 100;
    console.log(
        `Final points: ${finalPoints}\nAverage points: ${Math.floor(
            averagePoints
        )}\n${tournamentsWon.toFixed(2)}%`
    );
}
worldRankList(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
