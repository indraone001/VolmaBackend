// table pemilih migration
exports.up = function(knex) {
  // create table pemilih
  return knex.schema.createTable('pemilih', table => {
    // columns: id_pemilih, id_mhs, password, status, time
    table.increments('id_pemilih');
    table.integer('id_mhs').unsigned().references('mahasiswa.id_mhs');
    table.string('password');
    table.boolean('status');
    table.timestamps();
  })  
};

// drop table if exist
exports.down = function(knex) {
  return knex.schema.dropTable('pemilih');
};