import { describe, it, expect } from 'vitest'
import request from 'supertest'

import { app } from '../src/express.mjs'

describe('/api/:date', () => {
  it('Correct unix date', async () => {
    const res = await request(app).get('/api/0')

    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ unix: 0, utc: 'Thu, 01 Jan 1970 00:00:00 GMT' })
  })

  it('Correct utc date', async () => {
    const res = await request(app).get('/api/1970-01-01')

    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ unix: 0, utc: 'Thu, 01 Jan 1970 00:00:00 GMT' })
  })

  it('Incorrect utc date', async () => {
    const res = await request(app).get('/api/1970-13-13')

    expect(res.statusCode).toBe(400)
    expect(res.body).toEqual({ error: 'Invalid Date' })
  })

  it('Incorrect type unix date', async () => {
    const res = await request(app).get('/api/abc')

    expect(res.statusCode).toBe(400)
    expect(res.body).toEqual({ error: 'Invalid Date' })
  })

  it('Correct negative unix date ', async () => {
    const res = await request(app).get('/api/-1000')

    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ unix: -1000, utc: 'Wed, 31 Dec 1969 23:59:59 GMT' })
  })
})
