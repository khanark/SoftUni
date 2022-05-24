function nextDay(year, month, day) {
	const date = new Date(year, month - 1, day + 1);
	const newYear = date.getFullYear();
	const newMonth = date.getMonth() + 1;
	const newDate = date.getDate();
	console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2020, 3, 24);
