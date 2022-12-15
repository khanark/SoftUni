const http = require('http');
const host = 'localhost';
const port = 3003;

const { homeView } = require('./src/newView/home.js');
const { addBreedView } = require('./src/newView/addBreedView.js');
const { addCatView } = require('./src/newView/addCat.js');
const { styles } = require('./src/styles/styles.js');

const server = http.createServer((req, res) => {
  const fileType = req.url.includes('css') ? 'css' : 'html';

  res.writeHead(200, {
    'Content-Type': `text/${fileType}`,
  });

  // styles req
  if (req.url == '/content/styles/site.css') {
    res.write(styles);
  }

  if (req.url == '/') {
    res.write(homeView);
  } else if (req.url == '/cats/add-breed') {
    res.write(addBreedView);
  } else if (req.url == '/cats/add-cat') {
    res.write(addCatView);
  }
  res.end();
});

server.listen(port, host, () => console.log(`The server is listening on port ${port}...`));
