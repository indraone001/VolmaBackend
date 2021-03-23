
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mahasiswa').del()
    .then(function () {
      // Inserts seed entries
      return knex('mahasiswa').insert([
        {
          id: 1,
          nim: '1301180097',
          nama: 'Deri Indrawan',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 2,
          nim: '1301184369',
          nama: 'Ananta Ihza Ramadhan',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 3,
          nim: '1301180432',
          nama: 'Muhammad Salman Farhan',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 4,
          nim: '1301184026',
          nama: 'Ihsan Ahsanu Amala',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 5,
          nim: '1301184008',
          nama: 'Faiza Aulia Rahma Putra',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 6,
          nim: '1301180032',
          nama: 'Andi',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 7,
          nim: '1301184302',
          nama: 'Joko',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 8,
          nim: '1301184493',
          nama: 'Joni',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 9,
          nim: '1301180021',
          nama: 'Jeki',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 10,
          nim: '130118444',
          nama: 'Lina',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};
