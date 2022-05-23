/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-loop-func */
/* eslint-disable spaced-comment */
function buildWall(numbers) {
  let concreteSum = 0;
  const concreteEachDay = [];

  while (numbers.length > 0) {
    let flag = false;
    numbers.map((crew, index, array) => {
      if (crew < 30) {
        numbers[index] = crew + 1;
        concreteSum += 195;
        flag = true;
      } else {
        numbers.splice(index, 1);
        crew = array[index - 1];
      }
    });

    if (flag) {
      concreteEachDay.push(concreteSum);
      concreteSum = 0;
    }
  }

  const wallCost = concreteEachDay.reduce((a, b) => a + b) * 1900;

  console.log(concreteEachDay.join(', '));
  console.log(`${wallCost} pesos`);
}

buildWall([17, 22, 17, 19, 17]);
