function convertToJSON(name, lastName, hairColor) {
  const obj = {
    name,
    lastName,
    hairColor,
  };
  let result = JSON.stringify(obj);
  console.log(result);
}
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');
