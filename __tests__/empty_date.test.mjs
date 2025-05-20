import { describe, it, expect, assert } from 'vitest';
import request from 'supertest';

import { app } from '../src/express.mjs';

describe('/api/', () => {
    it("should return current date", async () => {
        const res = await request(app).get('/api');
        
        const date = Date.now();

        expect(res.statusCode).toBe(200);
        expect(res.body.utc).toEqual(new Date(date).toUTCString());
        expect(res.body.unix).closeTo(date, 1000);
    });
});