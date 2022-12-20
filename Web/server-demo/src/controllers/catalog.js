const { loadFragment, render } = require('../view');
const {
    getProducts,
    addProduct,
    getSingleProduct,
    editProduct,
} = require('../data');
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
                            p =>
                                `<li class="list">${p.name} - ${p.price}$ <a href="/edit?id=${p._id}">[edit]</a></li>`
                        )
                        .join('')
                );
            res.html(render(newFragment, 'Catalog'));
        });
    },
    createGet(req, res) {
        loadFragment('create', fragment => {
            res.html(render(fragment, 'Create Product'));
        });
    },
    createPost(req, res) {
        let buffer = '';
        req.on('data', chunk => {
            buffer += chunk.toString();
        });
        req.on('end', async () => {
            const result = querystring.decode(buffer);
            await addProduct(result.name, +result.price);
            res.writeHead(301, {
                Location: '/catalog',
            });
            res.end();
        });
    },
    async editGet(req, res) {
        console.log('Im in this function');
        const productId = req.url.searchParams.get('id');
        console.log(productId);
        const product = await getSingleProduct(productId);
        loadFragment('edit', fragment => {
            const newFragment = fragment
                .toString()
                .replace('{{_id}}', productId)
                .replace('{{name}}', product.name)
                .replace('{{price}}', product.price);
            res.html(render(newFragment));
        });
    },
    async editPost(req, res) {
        let buffer = '';
        req.on('data', chunk => {
            buffer += chunk.toString();
        });
        req.on('end', async () => {
            const productId = req.url.searchParams.get('id');
            const data = querystring.decode(buffer)
            await editProduct(productId, data);
            res.writeHead(301, {
                Location: '/catalog',
            });
            res.end();
        });
    },
};
