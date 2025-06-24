import express from 'express'

const date = express.Router()

date.get('/api/:date', (req, res) => {
  const input = Number(req.params.date)
  let unix, utc

  if (isNaN(input)) {
    unix = Date.parse(req.params.date)
    utc = new Date(unix).toUTCString()
  } else {
    unix = new Date(input).getTime()
    utc = new Date(input).toUTCString()
  }

  const msg = (utc === 'Invalid Date') ? { error: 'Invalid Date' } : { unix: Number(unix), utc }
  const code = (utc === 'Invalid Date') ? 400 : 200

  res.status(code).json(msg)
})

export { date }
