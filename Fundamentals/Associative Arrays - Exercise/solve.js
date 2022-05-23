function sortParty(arr) {
	let list = new Map();
	let vipList = [];
	let normalList = [];
	let flag = false;

	for (const person of arr) {
		if (person === 'PARTY') {
			flag = true;
			continue;
		}
		if (flag === false) {
			list.set(person);
		} else {
			list.delete(person);
		}
	}
	const sorted = Array.from(list.keys());
	for (const person of sorted) {
		if (person[0] >= '0' && person[0] <= '9') {
			vipList.push(person);
		} else {
			normalList.push(person);
		}
	}
	console.log(sorted.length);
	vipList.forEach(vip => console.log(vip));
	normalList.forEach(normal => console.log(normal));
}
sortParty([
	'7IK9Yo0h',
	'9NoBUajQ',
	'Ce8vwPmE',
	'7IK9Yo0h',
	'SVQXQCbc',
	'tSzE5t0p',
	'PARTY',
	'9NoBUajQ',
	'Ce8vwPmE',
	'SVQXQCbc',
]);
console.log('---');
// sortParty([
// 	'm8rfQBvl',
// 	'fc1oZCE0',
// 	'UgffRkOn',
// 	'7ugX7bm0',
// 	'9CQBGUeJ',
// 	'2FQZT3uC',
// 	'dziNz78I',
// 	'mdSGyQCJ',
// 	'LjcVpmDL',
// 	'fPXNHpm1',
// 	'HTTbwRmM',
// 	'B5yTkMQi',
// 	'8N0FThqG',
// 	'xys2FYzn',
// 	'MDzcM9ZK',
// 	'PARTY',
// 	'2FQZT3uC',
// 	'dziNz78I',
// 	'mdSGyQCJ',
// 	'LjcVpmDL',
// 	'fPXNHpm1',
// 	'HTTbwRmM',
// 	'B5yTkMQi',
// 	'8N0FThqG',
// 	'm8rfQBvl',
// 	'fc1oZCE0',
// 	'UgffRkOn',
// 	'7ugX7bm0',
// 	'9CQBGUeJ',
// ]);
