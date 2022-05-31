function printSpecialWords(string) {
	const wordsArr = string.split(' ');
	for (const word of wordsArr) {
		if (word.startsWith("#") && word.length >1 ) {
            let ascii = word.charCodeAt(1)
            let isLetter = (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)
            if (isLetter) {
                console.log(word.substring(1, word.length));
            }
        }
	}
}
printSpecialWords(
	'Nowadays everyone uses # to tag a #special word in #socialMedia'
);
