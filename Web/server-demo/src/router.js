const routes = {};

const register = (method, path, handler) => {
    if (!routes[path]) {
        routes[path] = {};
    }
    routes[path][method] = handler;
};

const getItem = register.bind(null, 'GET');
const postItem = register.bind(null, 'POST');

const match = (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    let handler;
    const actions = routes[url.pathname];

    if (actions) {
        handler = actions[req.method];
    }

    if (typeof handler == 'function') {
        handler(req, res);
    } else {
        defaultController(req, res);
    }
};

function defaultController(req, res) {
    res.writeHead(404);
    res.write('Not Found');
    res.end();
}

module.exports = {
    getItem,
    postItem,
    match,
};
