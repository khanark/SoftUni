function storeStudents(arr) {
	// create collection
	let courses = {};
	// parse the input
	for (const line of arr) {
		if (line.includes(': ')) {
			const [courseName, courseCapacity] = line.split(': ');
			if (!courses.hasOwnProperty(courseName)) {
				courses[courseName] = {
					capacity: Number(courseCapacity),
					students: [],
				};
			} else {
				courses[courseName].capacity += Number(courseCapacity);
			}
		} else {
			const token = line.split(' ');
			let [user, credits] = token.shift().split('[');
			credits = credits.slice(0, -1);
			const courseName = token.pop();
			const email = token.splice(2, 1).join('');

			const student = {
				user: user,
				email: email,
				credits: Number(credits),
			};
			if (courses.hasOwnProperty(courseName)) {
				if (courses[courseName].capacity !== 0) {
					courses[courseName].students.push(student);
					courses[courseName].capacity--;
				}
			}
		}
	}
	// sort the courses by the count of students in descending
	const sortedByStudentsCount = Object.entries(courses).sort(
		(a, b) => b[1].students.length - a[1].students.length
	);
	// print the output
	for (const [courseName, obj] of sortedByStudentsCount) {
		console.log(`${courseName}: ${obj.capacity} places left`);
		const sortedStudentsByCredits = obj.students.sort(
			(a, b) => b.credits - a.credits
		);
		for (const obj of sortedStudentsByCredits) {
			console.log(`--- ${obj.credits}: ${obj.user}, ${obj.email}`);
		}
	}
}

storeStudents([
	'JavaBasics: 2',
	'user1[25] with email user1@user.com joins C#Basics',
	'C#Advanced: 3',
	'JSCore: 4',
	'user2[30] with email user2@user.com joins C#Basics',
	'user13[50] with email user13@user.com joins JSCore',
	'user1[25] with email user1@user.com joins JSCore',
	'user8[18] with email user8@user.com joins C#Advanced',
	'user6[85] with email user6@user.com joins JSCore',
	'JSCore: 2',
	'user11[3] with email user11@user.com joins JavaBasics',
	'user45[105] with email user45@user.com joins JSCore',
	'user007[20] with email user007@user.com joins JSCore',
	'user700[29] with email user700@user.com joins JSCore',
	'user900[88] with email user900@user.com joins JSCore',
]);
