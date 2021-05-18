/**
 * This function run from package called "knex",
 * that help us to build the database use SQL query builder with migration
 * @param {Object} knex knex object that contained connection configuration
 * @returns {Object} query for create table schema named mahasiswa
 * if table doesn't exist
 */
exports.up = function(knex) {
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

/**
 * 
 * @param {Object} knex knex object that contained connection configuration
 * @returns {Object} sql query
 */
exports.down = function(knex) {
    return knex.schema.dropTable('mahasiswa');
};
