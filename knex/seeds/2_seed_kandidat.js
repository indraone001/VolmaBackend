// table kandidat seeding
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kandidat').del()
    .then(function () {
      // Inserts seed entries
      return knex('kandidat').insert([
        {
          id_kandidat: 1,
          id_ketua: 1,
          id_wakil: 2,
          nama_wakil: 'Ananta Ihza Ramadhan',
          img_ketua :'https://i.ibb.co/fDHd6hR/1.jpg',
          img_wakil: 'https://i.ibb.co/LY9CWYB/2.jpg',
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
          nama_wakil: 'Ihsan Ahsanu Amala',
          img_ketua :'https://i.ibb.co/S789Fsn/3.jpg',
          img_wakil: 'https://i.ibb.co/0nqmtjP/4.jpg',
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
          nama_wakil: 'Andi',
          img_ketua :'https://i.ibb.co/vD3LrPs/5.jpg',
          img_wakil: 'https://i.ibb.co/X4rBf6Q/6.jpg',
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
          nama_wakil: 'Joni',
          img_ketua :'https://i.ibb.co/Lnr4JH3/7.jpg',
          img_wakil: 'https://i.ibb.co/1nL3xCB/8.jpg',
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
          nama_wakil: 'Lina',
          img_ketua :'https://i.ibb.co/YPmsT83/9.jpg',
          img_wakil: 'https://i.ibb.co/WgDFT4f/10.jpg',
          no_urut: 5,
          visi: 'Visinya paslon no urut lima',
          misi: 'Misinya paslon no urut lima',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};
