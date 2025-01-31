var path = require('path');

function mainView(_, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

module.exports = { mainView };