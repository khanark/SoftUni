const { loadFragment, render } = require('../view');
const { getProducts } = require('../data');

module.exports = {
    async catalog(req, res) {
        const products = await getProducts();
        loadFragment('catalog', fragment => {
            const newFragment = fragment.toString().replace('{{items}}', () =>
                products.map(p => `<li class="list">${p.name} - ${p.price}$</li>`).join("")
            );
            res.html(render(newFragment, "Catalog"))
        });
    },
    create (req, res) {

    }
};
