function graduation(input) {
    let name = input[0];
    let index = 0;
    let grades = 1;
    let excluded = 0;
    let gradeSum = 0;
    let isValid = true;
    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);
        if (grade < 4) {
            excluded++;
            if (excluded > 1) {
                isValid = false;
                break;
            }
            continue;
        }
        gradeSum += grade;
        grades++;
    }
    let average = gradeSum / 12;
    if (!isValid) {
        console.log(`${name} has been excluded at ${index - 1} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
