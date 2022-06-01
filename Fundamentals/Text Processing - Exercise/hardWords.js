function hardWords(arr) {
	// parse the input
	let string = arr.shift();
	const wordsArr = arr.shift();
	const token = string.split(' ');

    // looping every single word of the token array
	for (const currentStringWord of token) {

        // looping every single word of the words array
        for (const word of wordsArr) {

            // checking if the word of the token array includes the sign "_"
            if (currentStringWord.includes('_')) {

                // looping the array to check the length of each word
				if (currentStringWord.lastIndexOf('_') + 1 == word.length) {

                    // replacing the word
					const replacedWord = '_'.repeat(currentStringWord.lastIndexOf('_') + 1);
					string = string.replace(replacedWord, word);
					break;
				}
			}
		}
	}

	// print the output
	console.log(string);
}
hardWords([
	"Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
	['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained'],
]);
