function manageMeeting(arr) {
	let meeting = {};

	for (const line of arr) {
		const [weekDay, name] = line.split(' ');
		if (meeting.hasOwnProperty(weekDay)) {
			console.log(`Conflict on ${weekDay}!`);
		} else {
			meeting[weekDay] = name;
			console.log(`Scheduled for ${weekDay}`);
		}
	}

	for (const weekDay in meeting) {
		console.log(`${weekDay} -> ${meeting[weekDay]}`);
	}
}
manageMeeting(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
