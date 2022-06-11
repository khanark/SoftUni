function calcLeftFood(strings) {
	// create the regex pattern and few other variables
	const string = strings.shift();
	let items = [];
	let totalCalories = 0;
	const pattern =
		/([#|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
	let match = pattern.exec(string);

	// parse the input
	while (match) {
		let obj = {
			name: match.groups.item,
			date: match.groups.date,
			calories: match.groups.calories,
		};
		items.push(obj);
		totalCalories += Number(match.groups.calories);
		match = pattern.exec(string);
	}

	// print the output
	console.log(
		`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`
	);
	for (const obj of items) {
		console.log(
			`Item: ${obj.name}, Best before: ${obj.date}, Nutrition: ${obj.calories}`
		);
	}
}
calcLeftFood([
	'#Br ead#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
]);
