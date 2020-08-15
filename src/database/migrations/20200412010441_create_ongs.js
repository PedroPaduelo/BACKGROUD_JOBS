
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('data').notNullable();
        table.string('bola_1').notNullable();
        table.string('bola_2').notNullable();
        table.string('bola_3').notNullable();
        table.string('bola_4').notNullable();
        table.string('bola_5').notNullable();
        table.string('bola_6').notNullable();
        table.string('bola_7').notNullable();
        table.string('bola_8').notNullable();
        table.string('bola_9').notNullable();
        table.string('bola_10').notNullable();
        table.string('bola_11').notNullable();
        table.string('bola_12').notNullable();
        table.string('bola_13').notNullable();
        table.string('bola_14').notNullable();
        table.string('bola_15').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
