import express from 'express'
import path from 'path'

const mainView = express.Router() 
const __dirname = import.meta.dirname

mainView.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

export { mainView }
