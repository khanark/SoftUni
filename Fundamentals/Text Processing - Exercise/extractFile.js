function extractFile(string) {
	// getting the fileName
	const fileName = string.slice(
		string.lastIndexOf('\\') + 1,
		string.lastIndexOf('.')
	);

	// getting the file extension
	const fileExtension = string.slice(
		string.lastIndexOf('.') + 1,
		string.length
	);

	// printing the output
	console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\template.bak.pptx');
