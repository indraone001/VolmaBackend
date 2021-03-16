
exports.up = function(knex) {
    return knex.schema.createTable('admin', table => {
        table.increments('id_admin');
        table.integer('id_mhs');
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin');
};
