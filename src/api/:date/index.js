import express from 'express';

const date = express.Router();

date.get('/api/:date', (req, res) => {
    var input = Number(req.params.date);
    var unix, utc;
    if (isNaN(input)) {
        unix = Date.parse(req.params.date);
        utc = new Date(unix).toUTCString();
    } else {
        unix = new Date(input).getTime();
        utc = new Date(input).toUTCString();
    }
    let msg = (utc === 'Invalid Date') ? { 'error': 'Invalid Date' } : { 'unix': Number(unix), 'utc': utc };
    res.json(msg);
});

export { date };