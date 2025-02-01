const path = require('path');
const router = require('express').Router();

router.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;