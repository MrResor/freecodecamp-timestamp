import request from 'supertest'
import { describe, expect, it } from 'vitest'

import { app } from '../src/express.mjs'

describe('/', () => {
  it('should return mainpage', async () => {
    const res = await request(app).get('/')

    expect(res.statusCode).toBe(200)
    expect(res.text).toContain('<title>Timestamp Microservice | freeCodeCamp.org</title>')
  })
})
