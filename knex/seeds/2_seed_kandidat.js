// table kandidat seeding
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kandidat').del()
    .then(function() {
      // Inserts seed entries
      return knex('kandidat').insert([{
          id_kandidat: 1,
          id_ketua: 1,
          id_wakil: 2,
          img_ketua: '1',
          img_wakil: '2',
          no_urut: 1,
          visi: 'Visinya paslon no urut satu',
          misi: 'Misinya paslon no urut satu',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_kandidat: 2,
          id_ketua: 3,
          id_wakil: 4,
          img_ketua: '3',
          img_wakil: '4',
          no_urut: 2,
          visi: 'Visinya paslon no urut dua',
          misi: 'Misinya paslon no urut dua',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_kandidat: 3,
          id_ketua: 5,
          id_wakil: 6,
          img_ketua: '5',
          img_wakil: '6',
          no_urut: 3,
          visi: 'Visinya paslon no urut tiga',
          misi: 'Misinya paslon no urut tiga',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_kandidat: 4,
          id_ketua: 7,
          id_wakil: 8,
          img_ketua: '7',
          img_wakil: '8',
          no_urut: 4,
          visi: 'Visinya paslon no urut empat',
          misi: 'Misinya paslon no urut empat',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_kandidat: 5,
          id_ketua: 9,
          id_wakil: 10,
          img_ketua: '9',
          img_wakil: '10',
          no_urut: 5,
          visi: 'Visinya paslon no urut lima',
          misi: 'Misinya paslon no urut lima',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};