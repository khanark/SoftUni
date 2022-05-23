function intervals(input) {
  let intervals = Number(input[0]);
  let from0to9 = 0;
  let from10to19 = 0;
  let from20to29 = 0;
  let from30to39 = 0;
  let from40to50 = 0;
  let points = 0;
  let invalid = 0;

  for (let i = 1; i <= intervals; i++) {
    let numInterval = Number(input[i]);
    if (numInterval >= 0 && numInterval <= 9) {
      points += numInterval * 0.2;
      from0to9++;
    } else if (numInterval >= 10 && numInterval <= 19) {
      points += numInterval * 0.3;
      from10to19++;
    } else if (numInterval >= 20 && numInterval <= 29) {
      from20to29++;
      points += numInterval * 0.4;
    } else if (numInterval >= 30 && numInterval <= 39) {
      from30to39++;
      points += 50;
    } else if (numInterval >= 40 && numInterval <= 50) {
      from40to50++;
      points += 100;
    } else {
      invalid++;
      points /= 2;
    }
  }
  const calcPercent = interval => (interval / intervals) * 100;
  console.log(points.toFixed(2));
  console.log(`From 0 to 9: ${calcPercent(from0to9).toFixed(2)}%`);
  console.log(`From 10 to 19: ${calcPercent(from10to19).toFixed(2)}%`);
  console.log(`From 20 to 29: ${calcPercent(from20to29).toFixed(2)}%`);
  console.log(`From 30 to 39: ${calcPercent(from30to39).toFixed(2)}%`);
  console.log(`From 40 to 50: ${calcPercent(from40to50).toFixed(2)}%`);
  console.log(`Invalid numbers: ${calcPercent(invalid).toFixed(2)}%`);
}
intervals(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);
