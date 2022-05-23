function rotate(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    if (arr.length === rotations) {
      break;
    }

    let shiftedEl = arr.shift();
    arr.push(shiftedEl);
  }

  console.log(arr.join(' '));
}
rotate([32, 21, 61, 1], 2);
