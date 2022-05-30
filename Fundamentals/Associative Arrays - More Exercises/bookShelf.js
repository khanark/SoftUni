function storeInformation(arr) {
	// create collection
	let shelves = {};
	// parse the input
	for (const line of arr) {
		if (line.includes(' -> ')) {
			const [shelfID, shelfGenre] = line.split(' -> ');
			if (!shelves.hasOwnProperty(shelfID)) {
				shelves[shelfID] = { genre: shelfGenre, books: [] };
			}
		} else {
			const [bookTitle, token] = line.split(': ');
			const [author, bookGenre] = token.split(', ');
			const book = {
				bookTitle: bookTitle,
				author: author,
			};
			for (const id in shelves) {
				if (shelves[id].genre === bookGenre) {
					shelves[id].books.push(book);
				}
			}
		}
	}
	// print the output
	const sortedByCountOfBooks = Object.entries(shelves).sort(
		(a, b) => b[1].books.length - a[1].books.length
	);
	for (const [shelfID, obj] of sortedByCountOfBooks) {
		console.log(`${shelfID} ${obj.genre}: ${obj.books.length}`);
		const sortedBooks = obj.books.sort((a, b) =>
			a.bookTitle.localeCompare(b.bookTitle)
		);
		sortedBooks.forEach(book => console.log(`--> ${book.bookTitle}: ${book.author}`))
	}
}
storeInformation([
	'1 -> history',
	'1 -> action',
	'Death in Time: Criss Bell, mystery',
	'2 -> mystery',
	'3 -> sci-fi',
	'Child of Silver: Bruce Rich, mystery',
	'Hurting Secrets: Dustin Bolt, action',
	'Future of Dawn: Aiden Rose, sci-fi',
	'Lions and Rats: Gabe Roads, history',
	'2 -> romance',
	'Effect of the Void: Shay B, romance',
	'Losing Dreams: Gail Starr, sci-fi',
	'Name of Earth: Jo Bell, sci-fi',
	'Pilots of Stone: Brook Jay, history',
]);
