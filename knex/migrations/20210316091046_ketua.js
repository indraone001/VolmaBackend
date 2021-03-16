
exports.up = function(knex) {
    return knex.schema.createTable('ketua', table => {
        table.increments('id_ketua');
        table.foreign('id_mhs').references('mahasiswa.id_mhs')
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('ketua');
};