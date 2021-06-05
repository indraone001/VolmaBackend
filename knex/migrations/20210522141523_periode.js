// table vote migration
exports.up = function(knex) {

  return knex.schema.createTable('periode', table => {
    table.increments('id_periode');
    table.date('start');
    table.date('end');
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('periode');
};