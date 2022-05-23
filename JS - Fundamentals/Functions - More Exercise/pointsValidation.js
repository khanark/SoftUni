function validatePoints(array) {
  let [num1, num2, num3, num4] = array.toString().split(',');
  const calcCoordinates = (x1, y1, x2, y2) =>
    Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  let firstPoint = calcCoordinates(num1, num2, 0, 0);
  let secondPoint = calcCoordinates(num3, num4, 0, 0);
  let thirdPoint = calcCoordinates(num1, num2, num3, num4);

  const printPoints = function (point, n1, n2, n3, n4) {
    console.log(
      Number.isInteger(point)
        ? `{${n1}, ${n2}} to {${n3}, ${n4}} is valid`
        : `{${n1}, ${n2}} to {${n3}, ${n4}} is invalid`
    );
  };
  printPoints(firstPoint, num1, num2, 0, 0);
  printPoints(secondPoint, num3, num4, 0, 0);
  printPoints(thirdPoint, num1, num2, num3, num4);
}
validatePoints([2, 1, 1, 1]);
