import { expect, test } from 'vitest'
import { createServer } from 'node:http'
import request from 'supertest'
import { app } from '../src/app'

test('User can create a new transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'new transaction',
      amount: 5000,
      type: 'credit',
    })
    .expect(201)
})
