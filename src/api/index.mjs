import express from 'express'

const emptyDate = express.Router()

emptyDate.get('/api', (_, res) => {
  const unix = Date.now()
  const utc = new Date(unix).toUTCString()

  res.json({ unix: Number(unix), utc })
})

export { emptyDate }
