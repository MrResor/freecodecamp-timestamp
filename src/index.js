function mainView(_, res) {
    res.sendFile(__dirname + '/views/index.html');
};

module.exports = { mainView };