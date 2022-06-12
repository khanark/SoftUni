function markPoints(string) {
	// create an empty array to store all the valid destinations
	let destinations = [];
	let points = 0;

	// create the regex pattern
	const pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;
	let match = pattern.exec(string);

	// loop the input and store the destinations
	while (match) {
		const destination = match[2];
		destinations.push(destination);
		points += destination.length;
		match = pattern.exec(string);
	}

	// print the output
	console.log(`Destinations: ${destinations.join(', ')}`);
	console.log(`Travel Points: ${points}`);
}
markPoints('=Bor==Invalid/invalid==i5valid=/I5valid/=i=');
