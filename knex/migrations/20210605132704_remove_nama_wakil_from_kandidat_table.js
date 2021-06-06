exports.up = function(knex) {
  return knex.schema.table('kandidat', table => {
    table.dropColumn('nama_wakil')
  })
};

exports.down = function(knex) {
  return knex.schema.table('kandidat', table => {

  })
};