// table vote seeding
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('vote').del()
    .then(function () {
      // Inserts seed entries
      return knex('vote').insert([{
          id_vote: 1,
          id_pemilih: 1,
          id_kandidat: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_vote: 2,
          id_pemilih: 2,
          id_kandidat: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_vote: 3,
          id_pemilih: 3,
          id_kandidat: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_vote: 4,
          id_pemilih: 4,
          id_kandidat: 2,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_vote: 5,
          id_pemilih: 5,
          id_kandidat: 2,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_vote: 6,
          id_pemilih: 6,
          id_kandidat: 3,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_vote: 7,
          id_pemilih: 7,
          id_kandidat: 3,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};