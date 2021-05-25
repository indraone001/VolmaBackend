// table periode seeding
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('periode').del()
    .then(function () {
      // Inserts seed entries
      return knex('periode').insert([{
          id_periode: 1,
          start: '2021-11-01',
          end: '2021-11-10',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};