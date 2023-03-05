import { knex } from '../database'

export async function transactionsRoutes(app) {
  app.get('/hello', async () => {
    const transaction = await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'Transação Teste',
        amount: 1000,
      })
      .returning('*')

    const transactions = await knex('transactions').select('*')

    return [transaction, transactions]
  })
}
