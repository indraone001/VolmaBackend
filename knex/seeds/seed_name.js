exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([{
          id: 1,
          judul: 'Membuat Website Dengan NodeJs',
          sinopsis: 'Buku belajar membuat website dengan menggunakan NodeJS',
          penulis: 'Buda Suyasa',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 2,
          judul: 'Web Design Dengan CSS 3 dan Bootstrap 4',
          sinopsis: 'Buku belajar membuat desain website dengan CSS3 dan framework CSS Bootstrap',
          penulis: 'Aditya Sudirman',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 3,
          judul: 'Jadi Penulis Blog dengan Wordpress',
          sinopsis: 'Buku tutorial membuat blog dengan menggunakan CMS Wordpress',
          penulis: 'Gayatri',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 4,
          judul: 'Permak Foto dengan Adobe Photoshop',
          sinopsis: 'Buku belajar Adobe Photoshop untuk melakukan editing gambar.',
          penulis: 'Ilham',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};