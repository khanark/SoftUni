function matchDate(arr) {
    // create the RegEx pattern
	const pattern =
    /\b(?<day>\d{2})([\/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g

    // create a variable match
	let match = pattern.exec(arr);

    // parse the input
	while (match !== null) {
        // you can check all the groups if you console.log("name of the variable holding the match".groups)
        // the groups made by the RegEx are simple objects with keys and values
		const day = match.groups['day'];
		const month = match.groups['month'];
		const year = match.groups['year'];

        // print the output by groups
		console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
		match = pattern.exec(arr);
	}
}
matchDate(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);
