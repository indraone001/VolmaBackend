// table kandidat migration
exports.up = function(knex) {
  // create table kandidat
  return knex.schema.createTable('kandidat', table => {
    // columns: id_kandidat, id_ketua, id_wakil, no_urut, visi, misi, time
    table.increments('id_kandidat');
    table.integer('id_ketua').unsigned().references('mahasiswa.id_mhs');
    table.integer('id_wakil').unsigned().references('mahasiswa.id_mhs');
    table.integer('no_urut');
    table.string('visi');
    table.text('misi');
    table.timestamps();
  })  
};

// drop table if exist
exports.down = function(knex) {
  return knex.schema.dropTable('kandidat');
};