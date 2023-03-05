import { expect, test, beforeAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

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
