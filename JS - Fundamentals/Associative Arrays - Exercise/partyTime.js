function partyTime(arr) {
	let vips = new Set();
	let regulars = new Set();

	while (arr[0] !== 'PARTY') {
		let currentGuest = arr.shift();

		if (!isNaN(currentGuest[0])) {
			vips.add(currentGuest);
		} else {
			regulars.add(currentGuest);
		}
	}
	arr.shift();
	for (const guest of arr) {
		vips.delete(guest)
		regulars.delete(guest)
	}

	let result = Array.from(vips.keys()).concat(Array.from(regulars.keys()));
	console.log(result.length);
	result.forEach(el => console.log(el));
}
partyTime([
	'7IK9Yo0h',
	'9NoBUajQ',
	'Ce8vwPmE',
	'SVQXQCbc',
	'tSzE5t0p',
	'PARTY',
	'9NoBUajQ',
	'Ce8vwPmE',
	'SVQXQCbc',
]);
