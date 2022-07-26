function solve(data, criteria) {
    // split the criteria by key and value
    const [key, value] = criteria.split('-');

    // parse the data input
    const persons = JSON.parse(data);

    // filter by the given criteria
    const result = persons.filter((obj) => obj[key] == value);

    // print the output
    result.forEach((obj, index) => print.call(obj, index));

    // create print function
    function print(index) {
        console.log(
            `${index}. ${this.first_name} ${this.last_name} - ${this.email}`
        );
    }
}
solve(
    `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);
