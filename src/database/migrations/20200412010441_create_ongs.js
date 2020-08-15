
exports.up = function(knex) {
    return knex.schema.createTable('teste', function (table) {
        table.string('ID').primary();
        table.string('DIGITO_1').notNullable();
        table.string('DIGITO_2').notNullable();
        table.string('DIGITO_3').notNullable();
        table.string('DIGITO_4').notNullable();
        table.string('DIGITO_5').notNullable();
        table.string('DIGITO_6').notNullable();
        table.string('DIGITO_7').notNullable();
        table.string('DIGITO_8').notNullable();
        table.string('DIGITO_9').notNullable();
        table.string('DIGITO_10').notNullable();
        table.string('DIGITO_11').notNullable();
        table.string('DIGITO_12').notNullable();
        table.string('DIGITO_13').notNullable();
        table.string('DIGITO_14').notNullable();
        table.string('DIGITO_15').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
