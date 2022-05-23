function sortMovies(arr) {
	let movies = {};

	for (const line of arr) {
		const tokens = line.split(' ');

		if (tokens.includes('addMovie')) {
			const movieName = tokens.slice(1, tokens.length).join(' ');
			movies[movieName] = { name: movieName };

		} else if (tokens.includes('directedBy')) {
			const index = tokens.indexOf('directedBy') + 1;
			const movieName = tokens.slice(0, index - 1).join(' ');
			const director = tokens.slice(index, tokens.length).join(' ');

			if (movies.hasOwnProperty(movieName)) {
				movies[movieName].director = director;
			}
		} else if (tokens.includes('onDate')) {
			const index = tokens.indexOf('onDate');
			const movieName = tokens.slice(0, index).join(' ');
			const date = tokens.pop();

			if (movies.hasOwnProperty(movieName)) {
				movies[movieName].date = date;
			}
		}
	}
	for (const movieName in movies) {
		const movie = movies[movieName];
        if (movie.hasOwnProperty("name") && movie.hasOwnProperty("director") && movie.hasOwnProperty("date")) {
		console.log(JSON.stringify(movie));
        }
	}
}

sortMovies([
	'addMovie Fast and Furious',
	'addMovie Godfather',
	'Inception directedBy Christopher Nolan',
	'Godfather directedBy Francis Ford Coppola',
	'Godfather onDate 29.07.2018',
	'Fast and Furious onDate 30.07.2018',
	'Batman onDate 01.08.2018',
	'Fast and Furious directedBy Rob Cohen',
]);
