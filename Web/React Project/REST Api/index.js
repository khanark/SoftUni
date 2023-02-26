const express = require('express');
const CORS = require('cors');
const app = express();
const port = 3000;

start();

async function start() {
    app.use(CORS());

    await require('./config/database')();
    app.use(express.json());
    require('./config/routes')(app);

    app.listen(port, () =>
        console.log(`The server is listening on port ${port}...`)
    );
}
