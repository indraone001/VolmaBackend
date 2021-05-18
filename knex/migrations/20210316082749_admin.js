// table admin migration
exports.up = function(knex) {
    // create table admin
    return knex.schema.createTable('admin', table => {
        // columns: id_admin, id_mhs, time
        table.increments('id_admin');
        table.integer('id_mhs').unsigned().references('mahasiswa.id_mhs')
        table.timestamps();
    })
};

// drop table if exist
exports.down = function(knex) {
    return knex.schema.dropTable('admin');
};
