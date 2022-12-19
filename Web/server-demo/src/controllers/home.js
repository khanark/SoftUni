const { loadFragment, render } = require('../view');

module.exports = {
    home(req, res) {
        loadFragment('home', fragment => {
            res.html(render(fragment, "Home"))
        });
    },
};
