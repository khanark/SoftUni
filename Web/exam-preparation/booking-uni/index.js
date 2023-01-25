const express = require('express');
const port = 3000;

start();

async function start() {
    const app = express();

    // Initialize all the config files
    await require('./config/database')(app);
    require('./config/handlebars')(app);
    require('./config/routes')(app);

    app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
    );
}
