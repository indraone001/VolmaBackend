// table vote migration
exports.up = function(knex) {
  // create table vote
  return knex.schema.createTable('vote', table => {
      // columns: id_vote, id_pemilih, id_kandidat, time
      table.increments('id_vote');
      table.integer('id_pemilih').unsigned().references('pemilih.id_pemilih')
      table.integer('id_kandidat').unsigned().references('kandidat.id_kandidat')
      table.timestamps();
  })
};

// drop table if exist
exports.down = function(knex) {
  return knex.schema.dropTable('vote');
};
