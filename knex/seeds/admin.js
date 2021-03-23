exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([{
          id_admin: 1,
          id_mhs: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_admin: 2,
          id_mhs: 2,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_admin: 3,
          id_mhs: 3,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};