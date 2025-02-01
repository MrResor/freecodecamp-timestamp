const router = require('express').Router();

router.get('/api/hello', (_, res) => {
    res.json({ greeting: 'hello API' });
});

module.exports = router;