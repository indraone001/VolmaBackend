exports.up = function(knex) {
  return knex.schema.createTable('kandidat', table => {
    table.increments('id_kandidat');
    table.foreign('ketua').references('ketua.id_ketua');
    table.foreign('wakil').references('wakil.id_wakil');
    table.integer('no_urut');
    table.string('visi');
    table.text('misi');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('kandidat');
};