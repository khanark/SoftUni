function solve() {
	// get the elements
	let string = document.getElementById('text').value;
	const convention = document.getElementById('naming-convention').value;
	const result = document.getElementById('result- container');

	string = string.toLowerCase()
    console.log(string);
	if (convention == 'Camel Case') {
		string = string.split(" ")
        for (let i = 0; i < string.length; i++) {
            string[i].replace(string[i][0], string[i][0].toUpperCase())
        }
        console.log(string.join(""));
	} else if (convention == 'Pascal Case') {

	}
}
//TODO: needs to be finished