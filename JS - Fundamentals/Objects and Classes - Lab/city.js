function solve(object) {
  // iteration
  const keys = Object.keys(object);
  
  for (const key of keys) {
    const value = object[key];
    console.log(`${key} -> ${value}`);
  }

  // enumeration
  for (const key in object) {
    const value = object[key];
    console.log(`${key} -> ${value}`);
  }
}
solve({
  name: 'Sofia',
  area: 492,
  population: 1238438,
  country: 'Bulgaria',
  postCode: '1000',
});
