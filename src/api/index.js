const router = require('express').Router();

router.get('/api', (_, res) => {
    let unix = Date.now();
    let utc = new Date(unix).toUTCString();
    res.json({ 'unix': Number(unix), 'utc': utc });
});

module.exports = router;