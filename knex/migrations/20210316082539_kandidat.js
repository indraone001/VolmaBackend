exports.up = function(knex) {
  return knex.schema.createTable('kandidat', table => {
    table.increments('id_kandidat');
    table.integer('id_ketua').unsigned().references('mahasiswa.id_mhs');
    table.integer('id_wakil').unsigned().references('mahasiswa.id_mhs');
    table.integer('no_urut');
    table.string('visi');
    table.text('misi');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('kandidat');
};