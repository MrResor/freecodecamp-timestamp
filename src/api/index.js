function date(_, res) {
    let unix = Date.now();
    let utc = new Date(unix).toUTCString();
    res.json({ 'unix': Number(unix), 'utc': utc });
};

module.exports = { date };