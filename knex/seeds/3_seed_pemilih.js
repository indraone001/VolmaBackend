// table pemilih seeding
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pemilih').del()
    .then(function () {
      // Inserts seed entries
      return knex('pemilih').insert([{
          id_pemilih: 1,
          id_mhs: 1,
          status: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_pemilih: 2,
          id_mhs: 2,
          status: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_pemilih: 3,
          id_mhs: 3,
          status: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_pemilih: 4,
          id_mhs: 4,
          status: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_pemilih: 5,
          id_mhs: 5,
          status: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_pemilih: 6,
          id_mhs: 6,
          status: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_pemilih: 7,
          id_mhs: 7,
          status: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_pemilih: 8,
          id_mhs: 8,
          status: 0,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_pemilih: 9,
          id_mhs: 9,
          status: 0,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_pemilih: 10,
          id_mhs: 10,
          status: 0,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};