function calcCone(heigh, radius) {
  let s = Math.sqrt(heigh * heigh + radius * radius);
  let volume = (Math.PI * heigh * heigh * radius) / 3;
  let area = Math.PI * heigh * (heigh + s);
  console.log(volume.toFixed(4));
  console.log(area.toFixed(4));
}
calcCone(3, 5);
