function storeInfo(arr) {
	let users = new Set();
	let articles = new Set();
	let storedInfo = {};

	// parse the input string
	for (const line of arr) {
		if (line.includes('user')) {
			const user = line.substr(line.indexOf(' ') + 1, line.length);
			users.add(user);
		} else if (line.includes('article')) {
			const article = line.substr(line.indexOf(' ') + 1, line.length);
			articles.add(article);
		} else {
			const [token1, token2] = line.split(': ');
			const user = token1.substr(0, token1.indexOf('posts') - 1);
			const articleName = token1.substr(
				token1.indexOf('posts on') + 9,
				token1.length
			);
			const commentTitle = token2.substr(0, token2.indexOf(','));
			const commentContent = token2.substr(
				token2.indexOf(',') + 2,
				token2.length
			);
			// NOTE: One user can have more than one comment on a single Article
			if (users.has(user) && articles.has(articleName)) {
				const comment = {
					commentTitle: commentTitle,
					commentContent: commentContent,
				};
				if (!storedInfo.hasOwnProperty(articleName)) {
					storedInfo[articleName] = { totalComments: 0 };
				}
				if (!storedInfo[articleName].hasOwnProperty(user)) {
					storedInfo[articleName][user] = [comment];
					storedInfo[articleName].totalComments++;
				} else {
					storedInfo[articleName][user].push(comment);
					storedInfo[articleName].totalComments++;
				}
			}
		}
	}
	// At the end sort the articles by a count of comments and print the users with their comments ordered by usernames in ascending.
	const sortedByCountOfComments = Object.entries(storedInfo).sort((a, b) => {
		const firstTotal = a[1].totalComments;
		const secondTotal = b[1].totalComments;
		return secondTotal - firstTotal;
	});
	// printing the output
	for (const [article, obj] of sortedByCountOfComments) {
		console.log(`Comments on ${article}`);
		delete obj.totalComments;
		const sortedByName = Object.entries(obj).sort((a, b) =>
			a[0].localeCompare(b[0])
		);
		for (const [user, comments] of sortedByName) {
			for (const currentComment of comments) {
				console.log(`--- From user ${user}: ${currentComment.commentTitle} - ${currentComment.commentContent}`);
			}
		}
	}
}

console.log('---- ');
storeInfo([
	'user aUser123',
	'someUser posts on someArticle: NoTitle, stupidComment',
	'article Books',
	'article Movies',
	'article Shopping',
	'user someUser',
	'user uSeR4',
	'user lastUser',
	'uSeR4 posts on Books: I like books, I do really like them',
	'uSeR4 posts on Movies: I also like movies, I really do',
	'uSeR4 posts on Movies: I, I really do not',
	'uSeR4 posts on Movies: I, me really do not',
	'someUser posts on Shopping: title, I go shopping every day',
	'someUser posts on Movies: Like, I also like movies very much',
	'someUser posts on Movies: Like, I also like movies not much',
]);
