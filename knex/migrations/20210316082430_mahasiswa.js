// table mahasiswa migration
exports.up = function(knex) {
    // create table mahasiswa
    return knex.schema.createTable('mahasiswa', table => {
        // columns: id_mhs, nim, nama, jurusan, angkatan, password, time
        table.increments('id_mhs');
        table.string('nim');
        table.string('nama');
        table.string('jurusan');
        table.string('angkatan');
        table.string('password');
        table.timestamps();
    })
};

// drop table if exist
exports.down = function(knex) {
    return knex.schema.dropTable('mahasiswa');
};
