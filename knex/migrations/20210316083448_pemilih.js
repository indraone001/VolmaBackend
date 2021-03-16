exports.up = function(knex) {
  return knex.schema.createTable('pemilih', table => {
    table.increments('id_pemilih');
    table.foreign('id_mhs').references('id_mhs').inTable('mahasiswa');
    table.string('password');
    table.boolean('status');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('pemilih');
};