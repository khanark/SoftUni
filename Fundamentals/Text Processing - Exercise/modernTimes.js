function printSpecialWords(string) {
    // creating array of words
	const wordsArr = string.split(' ');

    // looping through the array of words
	for (const word of wordsArr) {

        // checking if the words starts with # and if its length is > 1
		if (word.startsWith("#") && word.length >1 ) {

            // getting the ascii code of the first char
            let ascii = word.charCodeAt(1)

            // checking if the char is letter or special symbol
            let isLetter = (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)
            if (isLetter) {

                // printing the output
                console.log(word.substring(1, word.length));
            }
        }
	}
}
printSpecialWords(
	'Nowadays everyone uses # to tag a #special word in #socialMedia'
);
