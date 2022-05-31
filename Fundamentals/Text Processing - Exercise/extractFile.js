function extractFile(string) {
	const fileName = string.slice(
		string.lastIndexOf('\\') + 1,
		string.lastIndexOf('.')
	);
	const fileExtension = string.slice(
		string.lastIndexOf('.') + 1,
		string.length
	);
	console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\template.bak.pptx');
