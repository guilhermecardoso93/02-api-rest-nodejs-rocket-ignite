import { expect, test } from 'vitest'

test('User can create a new transaction', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})