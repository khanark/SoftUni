function convert(obj) {
  const person = JSON.parse(obj);

  for (const prop in person) {
    console.log(`${prop}: ${person[prop]}`);
  }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}');
convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
