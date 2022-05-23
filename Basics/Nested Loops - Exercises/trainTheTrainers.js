function trainTheTrainers(input) {
    const evaluator = Number(input[0]);
    let index = 1;
    let task = input[index];
    index++;
    let grades = Number(input[index]);
    let evaluationSum = 0;
    let currentEvaluator = 1;
    let medianGrade = 0;
    let currentTask = "";
    let taskCount = 0;
    let endGrade = 0;

    while (task !== "Finish") {
        currentEvaluator = 1;
        evaluationSum = 0;
        currentTask = task;
        taskCount++;

        while (currentEvaluator <= evaluator) {
            grades = Number(input[index]);
            currentEvaluator++;
            evaluationSum += grades;
            index++;
            task = input[index];
        }
        index++;
        medianGrade = evaluationSum / evaluator;
        endGrade += medianGrade;
        console.log(`${currentTask} - ${medianGrade.toFixed(2)}.`);
    }
    endGrade = endGrade / taskCount;
    console.log(`Student's final assessment is ${endGrade.toFixed(2)}.`);
}
trainTheTrainers([
    "2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish",
]);
