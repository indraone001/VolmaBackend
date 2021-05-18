exports.up = function(knex) {
  return knex.schema.createTable('pemilih', table => {
    table.increments('id_pemilih');
    table.integer('id_mhs').unsigned().references('mahasiswa.id_mhs');
    table.boolean('status');
    table.timestamps();
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('pemilih');
};