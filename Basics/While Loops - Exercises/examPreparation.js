function examPreparation(input) {
  const totalBadGrades = input[0];
  let index = 1;
  let endTask = input[index];
  let gradesFromArray = Number(input[index]);
  let gradeSum = 0;
  let badGrades = 0;
  let isValid = true;
  let problemCount = 0;

  while (endTask !== "Enough") {
    index++;
    gradesFromArray = Number(input[index]);
    problemCount++;
    if (gradesFromArray <= 4) {
      badGrades++;
      if (badGrades == totalBadGrades) {
        isValid = false;
        break;
      }
    }
    gradeSum += gradesFromArray;
    index++;
    endTask = input[index];
  }
  const average = gradeSum / problemCount;
  if (!isValid) {
    console.log(`You need a break, ${badGrades} poor grades.`);
  } else {
    endTask = input[index - 2];
    console.log(
      `Average score: ${average.toFixed(
        2
      )}\nNumber of problems: ${problemCount}\nLast problem: ${endTask}`
    );
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
