function cut(string) {
	const firstHalf = string
		.split('')
		.slice(0, string.length / 2)
		.reverse()
		.join('');
	const secondHalf = string
		.split('')
		.slice(string.length / 2, string.length)
		.reverse()
		.join('');
	console.log(firstHalf);
	console.log(secondHalf);
}
cut('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('-----');
cut('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
