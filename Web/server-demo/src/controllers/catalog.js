const { loadFragment, render } = require('../view');
const { getProducts, addProduct } = require('../data');
const querystring = require('node:querystring');

module.exports = {
    async catalog(req, res) {
        const products = await getProducts();
        loadFragment('catalog', fragment => {
            const newFragment = fragment
                .toString()
                .replace('{{items}}', () =>
                    products
                        .map(
                            p => `<li class="list">${p.name} - ${p.price}$</li>`
                        )
                        .join('')
                );
            res.html(render(newFragment, 'Catalog'));
        });
    },
    createGet(req, res) {
        loadFragment('create', fragment => {
            res.html(render(fragment, 'Create'));
        });
    },
    createPost(req, res) {
        let buffer = ""
        req.on('data', chunk => {
            buffer += chunk.toString();
        });
        req.on('end', async () => {
            const result = querystring.decode(buffer)
            await addProduct(result.name, result.price)
            res.writeHead(301, {
                Location: "/catalog"
            })
            res.end();
        });
    },
};
