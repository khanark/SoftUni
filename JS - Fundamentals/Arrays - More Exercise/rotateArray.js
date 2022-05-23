function rotate(arr) {
  let rotations = arr.pop();

  for (let i = 0; i < rotations; i++) {
    let element = arr[arr.length - 1];
    
    arr.pop(element);
    arr.unshift(element);
  }

  console.log(arr.join(' '));
}
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
