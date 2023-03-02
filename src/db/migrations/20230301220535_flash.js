exports.up = function(knex) {
  return knex.schema.createTable('flash', (table) => {
    table.increments('id').primary()
    table.integer('Date')
    table.string('Filename')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('flash')
};
