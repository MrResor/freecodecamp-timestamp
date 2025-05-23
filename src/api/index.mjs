import express from 'express'

const empty_date = express.Router()

empty_date.get('/api', (_, res) => {
  const unix = Date.now()
  const utc = new Date(unix).toUTCString()

  res.json({ unix: Number(unix), utc })
})

export { empty_date }
