import { knex as setupKnex } from 'knex'

const knex = setupKnex({
  client: 'sqlite',
  connection: {
    filename: './temp/app.db',
  },
})
