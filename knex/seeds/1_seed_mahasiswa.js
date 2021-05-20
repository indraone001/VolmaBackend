/**
 * Seed the table that has been created from migration
 * @param {Object} knex knex object that contained connection configuration
 * @returns {Object} SQL query builder for insert the dummy data
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mahasiswa').del()
    .then(function () {
      // Inserts seed entries
      return knex('mahasiswa').insert([
        {
          id_mhs: 1,
          nim: '1301180097',
          nama: 'Deri Indrawan',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_mhs: 2,
          nim: '1301184369',
          nama: 'Ananta Ihza Ramadhan',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          password: '$2b$10$GASuz2b/NmRfma6KMeCup.IhgK.vAPJRCFisqgWLzUDngboe.JSSC',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_mhs: 3,
          nim: '1301180432',
          nama: 'Muhammad Salman Farhan',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_mhs: 4,
          nim: '1301184026',
          nama: 'Ihsan Ahsanu Amala',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          password: '$2b$10$R3fQEn7fbMmYuJ2KcvTFv.y/McgttEo9A4LbkLu04BUfwZ2lKv.PC',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_mhs: 5,
          nim: '1301184008',
          nama: 'Faiza Aulia Rahma Putra',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_mhs: 6,
          nim: '1301180032',
          nama: 'Andi',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_mhs: 7,
          nim: '1301184302',
          nama: 'Joko',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_mhs: 8,
          nim: '1301184493',
          nama: 'Joni',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_mhs: 9,
          nim: '1301180021',
          nama: 'Jeki',
          jurusan: 'S1 Informatika',
          angkatan: '2018',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id_mhs: 10,
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
