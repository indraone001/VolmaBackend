
exports.up = function(knex) {
    return knex.schema.createTable('ketua', table => {
        table.increments('id_ketua');
        table.integer('id_mhs');
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('ketua');
};