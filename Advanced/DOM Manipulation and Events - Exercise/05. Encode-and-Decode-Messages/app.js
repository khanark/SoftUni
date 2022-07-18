function encodeAndDecodeMessages() {
	// DOM Buttons
	const encodeBtn = document.querySelector('#main > div button');
	const decodeBtn = document.querySelector('#main div:nth-child(2) button');

	// empty string to store the decoded text
	let decodedString = '';

	encodeBtn.addEventListener('click', encode);
	decodeBtn.addEventListener('click', decode);

	// encoding function
	function encode(e) {
		const currentDiv = e.target.parentNode;
		const text = currentDiv.children[1];
		decodedString = text.value;

		const result = text.value
			.split('')
			.map(letter => String.fromCharCode(Number(letter.charCodeAt() + 1)))
			.join('');

		currentDiv.parentNode.children[1].children[1].value = result;
		text.value = '';
	}

	// decoding function
	function decode(e) {
		const currentDiv = e.target.parentNode;
		currentDiv.parentNode.children[1].children[1].value = decodedString;
	}
}
