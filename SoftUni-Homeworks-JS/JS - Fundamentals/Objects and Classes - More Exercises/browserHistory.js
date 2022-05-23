function browserHistory(obj, arr) {
	let Object = obj;

	for (const line of arr) {
		let isValid = true;
		const tokens = line.split(' ');
		const command = tokens.shift();
		const tabName = tokens.join(' ');

		switch (command) {
			case 'Close':
				if (Object['Open Tabs'].includes(tabName)) {
					Object['Open Tabs'].splice(Object['Open Tabs'].indexOf(tabName), 1);
					Object['Recently Closed'].push(tabName);
				} else {
					isValid = false;
				}
				break;
			case 'Open':
				Object['Open Tabs'].push(tabName);
				break;
			case 'Clear':
				Object['Open Tabs'] = [];
				Object['Recently Closed'] = [];
				Object['Browser Logs'] = [];
				isValid = false
				break;
		}
		if (isValid) {
			Object['Browser Logs'].push(line);
		}
	}

	console.log(Object['Browser Name']);
	console.log(`Open Tabs: ${Object['Open Tabs'].join(', ')}`);
	console.log(`Recently Closed: ${Object['Recently Closed'].join(', ')}`);
	console.log(`Browser Logs: ${Object['Browser Logs'].join(', ')}`);
}
browserHistory(
	{"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]


);
