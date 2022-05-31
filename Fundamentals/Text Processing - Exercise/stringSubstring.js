function check(word, sentence) {
	// creating array of words
	const sentenceArray = sentence.split(' ');

	// initializing boolean flag
	let flag = false;

	// looping through the words of the sentence
	for (let string of sentenceArray) {

		// parsing each word to lower-case
		string = string.toLowerCase();

		// checking if the parameter word is the same as the word in the sentence
		// if so, we mark it with the boolean flag changing it's state to true
		if (string === word) {
			flag = true;
			break;
		}
	}

	// printing the output
	if (flag) {
		console.log(word);
	} else {
		console.log(word + ' ' + 'not found!');
	}
}
check('python', 'JavaScript is the best programming language');
