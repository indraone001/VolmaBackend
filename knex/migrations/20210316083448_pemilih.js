exports.up = function(knex) {
  return knex.schema.createTable('pemilih', table => {
    table.increments('id_pemilih');
    table.integer('id_mhs');
    table.string('password');
    table.boolean('status');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('pemilih');
};