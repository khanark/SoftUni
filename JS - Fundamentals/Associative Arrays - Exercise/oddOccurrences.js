function extract(string) {
	let elements = {};
	const words = string.split(' ');

	for (let word of words) {
		word = word.toLowerCase();
		if (elements.hasOwnProperty(word)) {
			elements[word]++;
		} else {
			elements[word] = 1;
		}
	}

	let result = Object.keys(elements).filter(key => elements[key] % 2 !== 0);
	result.sort((a, b) => elements[b] - elements[a]);
	console.log(result.join(' '));
}
extract('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
