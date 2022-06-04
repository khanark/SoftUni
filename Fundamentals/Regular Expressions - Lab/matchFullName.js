function matchName(names) {
	// create RegEx pattern
	const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    // match the pattern on each string
	const result = names.match(pattern);

    // print the result
	console.log(result.join(" "));
}
matchName(
	'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov'
);
