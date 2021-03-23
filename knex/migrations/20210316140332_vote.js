
exports.up = function(knex) {
  return knex.schema.createTable('vote', table => {
      table.increments('id_vote');
      table.integer('id_pemilih').unsigned().references('pemilih.id_pemilih')
      table.integer('id_kandidat').unsigned().references('kandidat.id_kandidat')
      table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('vote');
};
