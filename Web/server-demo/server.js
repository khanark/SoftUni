const http = require('http');
const fs = require('fs');
const { getItem, postItem, match } = require('./src/router');
const { home } = require('./src/controllers/home');
const port = 3000;

getItem('/', home);

http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        fs.createReadStream('./content/favicon.ico').pipe(res);
    } else if (req.url.startsWith('/public/')) {
        fs.createReadStream(`./static${req.url.slice(8)}`).pipe(res);
    } else {
        match(req, res);
    }
}).listen(port, () => console.log(`Server is listening on port ${port}`));
