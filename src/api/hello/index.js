function hello(_, res) {
    res.json({ greeting: 'hello API' });
}

module.exports = { hello };