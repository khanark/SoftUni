function check(word, sentence) {
	const sentenceArray = sentence.split(' ');
	let flag = false;
	for (let string of sentenceArray) {
		string = string.toLowerCase();
		if (string === word) {
			flag = true;
			break;
		}
	}
	if (flag) {
		console.log(word);
	} else {
		console.log(word + ' ' + 'not found!');
	}
}
check('python', 'JavaScript is the best programming language');
