const http = require('http');
const fs = require('fs');
const { getItem, postItem, match } = require('./src/router');
const { home } = require('./src/controllers/home');
const { catalog, createGet, createPost, editGet } = require('./src/controllers/catalog');
const port = 3000;

getItem('/', home);
getItem('/catalog', catalog);
getItem('/create', createGet);
postItem('/create', createPost);
getItem('/edit', editGet);

http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        fs.createReadStream('./static/favicon.ico').pipe(res);
    } else if (req.url.startsWith('/public/')) {
        req.url;
        fs.createReadStream(`./static/${req.url.slice(8)}`).pipe(res);
    } else {
        match(req, res);
    }
}).listen(port, () => console.log(`Server is listening on port ${port}`));
