function solve(arr) {
	const friends = arr.shift().split(', ');
	let blacklistedNames = 0;
	let lostNames = 0;

	while (arr[0] !== 'Report') {
		let line = arr.shift().split(' ');
		let command = line[0];

		switch (command) {
			case 'Blacklist':
				if (friends.includes(line[1])) {
					friends[friends.indexOf(line[1])] = 'Blacklisted';
					console.log(`${line[1]} was blacklisted.`);
					blacklistedNames++;
				} else {
					console.log(`${line[1]} was not found.`);
				}
				break;
			case 'Error':
				if (Number(line[1]) >= 0 && Number(line[1]) < friends.length) {
					if (
						friends[Number(line[1])] !== 'Blacklisted' &&
						friends[Number(line[1])] !== 'Lost'
					) {
						console.log(
							`${friends[Number(line[1])]} was lost due to an error.`
						);
						friends[Number(line[1])] = 'Lost';
						lostNames++;
					}
				}
				break;
			case 'Change':
				if (Number(line[1]) >= 0 && Number(line[1]) < friends.length) {
					let currentName = friends[Number(line[1])];
					friends[Number(line[1])] = line[2];
					console.log(
						`${currentName} changed his username to ${
							friends[Number(line[1])]
						}.`
					);
				}
		}
	}
	console.log(`Blacklisted names: ${blacklistedNames}`);
	console.log(`Lost names: ${lostNames}`);
	console.log(friends.join(' '));
}
solve([
	'Mike, John, Eddie, William',
	'Error 3',
	'Error 3',
	'Change 0 Mike123',
	'Report',
]);
