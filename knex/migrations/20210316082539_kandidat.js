exports.up = function(knex) {
  return knex.schema.createTable('kandidat', table => {
    table.increments('id_kandidat');
    table.foreign('id_ketua').references('id_ketua').inTable('ketua');
    table.foreign('id_wakil').references('id_wakil').inTable('wakil');
    table.integer('no_urut');
    table.string('visi');
    table.text('misi');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('kandidat');
};