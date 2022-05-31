function cut(string) {
    // splitting first half
	const firstHalf = string
		.split('')
		.slice(0, string.length / 2)
		.reverse()
		.join('');

    // splitting second half
	const secondHalf = string
		.split('')
		.slice(string.length / 2, string.length)
		.reverse()
		.join('');

    // printing the output
	console.log(firstHalf);
	console.log(secondHalf);
}
cut('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('-----');
cut('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
