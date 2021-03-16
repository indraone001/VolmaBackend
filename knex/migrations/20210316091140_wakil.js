
exports.up = function(knex) {
    return knex.schema.createTable('wakil', table => {
        table.increments('id_wakil');
        table.foreign('id_mhs').references('mahasiswa.id_mhs')
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('wakil');
};