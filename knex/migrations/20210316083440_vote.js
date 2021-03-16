
exports.up = function(knex) {
    return knex.schema.createTable('vote', table => {
        table.increments('id_vote');
        table.foreign('id_pemilih').references('pemilih.id_pemilih')
        table.foreign('id_kandidat').references('kandidat.id_kandidat')
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('vote');
};
