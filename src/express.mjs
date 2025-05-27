import cors from 'cors'
import express from 'express'
import path from 'path'

import { date } from './api/:date/index.mjs'
import { docs } from './api/docs/index.mjs'
import { emptyDate } from './api/index.mjs'
import { hello } from './api/hello/index.mjs'
import { logger } from './logger.mjs'
import { mainView } from './index.mjs'

const app = express()
const router = express.Router()
const __dirname = import.meta.dirname

// Middleware declaration

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
router.use(cors({ optionsSuccessStatus: 200 })) // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
router.use(express.static(path.join(__dirname, '..', 'public')))

router.use((req, _, next) => {
  let hasRouteToHandle = null
  router.stack.forEach((stackItem) => {
    // check if current rout path matches route request path
    if (stackItem.handle?.stack !== undefined) {
      stackItem?.handle.stack.forEach((innerItem) => {
        if (innerItem.regexp.test(req.path)) {
          hasRouteToHandle = true
        }
      })
    }
  })

  const msg = `${req.method} ${req.path} - ${req.headers['x-forwarded-for'] || req.ip}`

  if (hasRouteToHandle) {
    logger.http(msg)
  } else {
    // No matching route for this request
    logger.error(msg)
  }

  next()
})

// Routes declaration

// /
router.use(mainView)
// /api/hello
router.use(hello)
// /api/docs
router.use(docs)
// /api
router.use(emptyDate)
// /api:date
router.use(date)

app.use(router)

export { app }
