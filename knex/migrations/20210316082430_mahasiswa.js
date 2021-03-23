
exports.up = function(knex) {
    return knex.schema.createTable('mahasiswa', table => {
        table.increments('id_mhs');
        table.string('nim');
        table.string('nama');
        table.string('jurusan');
        table.string('angkatan');
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('mahasiswa');
};
