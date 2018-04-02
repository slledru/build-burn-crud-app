
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('offer').del()
    .then(() => {
      // Inserts seed entries
      return knex('offer').insert([
        {id: 1, name: '25% off your purchase on the first of never.'}
      ])
        .then(() => {
          return knex.raw(`select setval('offer_id_seq', (select max(id) from offer));`)
        })
    })
}
