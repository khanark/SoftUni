function change(strings) {
	// parse the input
	const stringArr = strings.split(' ');
	let result = 0;
	let isLooped = false;

	for (const string of stringArr) {
		let sum = 0;

		if (string.length > 1) {
			const letters = [string.substring(0, 1), string.slice(-1)];
			const number = Number(string.slice(1, string.length - 1));

			// looping through letters
			for (const currentLetter of letters) {
				const isUpperCase = currentLetter.toUpperCase() == currentLetter;
				const letterPos = currentLetter.toUpperCase().charCodeAt() - 64;

				// second letter
				if (isLooped) {
					if (isUpperCase) {
						sum -= letterPos;
					} else {
						sum += letterPos;
					}

                    // summing
					result += sum;
                    isLooped = false
                    break
				}

				// first letter
				if (isUpperCase) {
					sum = number / letterPos;
				} else {
					sum = number * letterPos;
				}
				isLooped = true;
			}
		}
	}

    // print the output
	console.log(result.toFixed(2));
}
change('A12b s17G');
