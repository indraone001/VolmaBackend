exports.up = function (knex, Promise) {
    return knex.schema.createTable('books', table => {
        table.increments('id');
        table.string('judul').notNullable();
        table.string('sinopsis').notNullable();
        table.string('penulis').notNullable();
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('books');
};