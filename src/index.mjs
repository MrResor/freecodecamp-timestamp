import express from 'express'
import path from 'path'

const __dirname = import.meta.dirname
const mainView = express.Router()

mainView.get('/', (_, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

export { mainView }
