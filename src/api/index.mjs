import express from 'express';

const empty_date = express.Router();

empty_date.get('/api', (_, res) => {
    let unix = Date.now();
    let utc = new Date(unix).toUTCString();
    res.json({ 'unix': Number(unix), 'utc': utc });
});

export { empty_date };