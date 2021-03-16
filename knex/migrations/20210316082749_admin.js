
exports.up = function(knex) {
    return knex.schema.createTable('admin', table => {
        table.increments('id_admin');
        table.foreign('id_mhs').references('mahasiswa.id_mhs')
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin');
};
