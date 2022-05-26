function censorWord(text, word) {
	let result = text.replace(word, repeat(word));
	while (result.includes(word)) {
		result = result.replace(word, repeat(word));
	}
	function repeat(currentWord) {
		let length = currentWord.length;
		let result = '';
		for (let i = 0; i < length; i++) {
			result += '*';
		}
		return result;
	}
	console.log(result);
}
censorWord('A small sentence with some words, small', 'small');
