const fs = require('fs');

const layout = fs.readFileSync('./static/layout.html').toString();

const render = (body, title) => {
    return layout.replace('{{body}}', body).replace('{{title}}', title);
};

const loadFragment = (name, callback) => {
    fs.readFile(`./static/${name}.html`, (err, data) => callback(data));
};

module.exports = { render, loadFragment };
