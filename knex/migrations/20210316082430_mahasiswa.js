
exports.up = function(knex) {
    return knex.schema.createTable('mahasiswa', table => {
        table.increments('id_mhs');
        table.string('nim').notNullable();
        table.string('nama').notNullable();
        table.string('jurusan').notNullable();
        table.string('angkatan').notNullable();
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('mahasiswa');
};
