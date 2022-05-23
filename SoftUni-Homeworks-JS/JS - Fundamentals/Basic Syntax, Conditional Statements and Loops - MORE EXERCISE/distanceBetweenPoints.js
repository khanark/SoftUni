function findDistance(x1, y1, x2, y2) {
  let horizontal = Math.pow(x2 - x1, 2);
  let vertical = Math.pow(y2 - y1, 2);

  console.log(Math.sqrt(horizontal + vertical));
}
findDistance(2.34, 15.66, -13.55, -2.9985);
