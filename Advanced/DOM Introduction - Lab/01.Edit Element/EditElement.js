function editElement(ref, match, replacer) {
	// take the h1 tag
	const heading = ref;

	// create a RegExp
	const regex = new RegExp(match, 'g');

	// replace the match with the replacer
	heading.textContent = heading.textContent.replace(regex, replacer);
}
