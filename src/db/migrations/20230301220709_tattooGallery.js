exports.up = function(knex) {
    return knex.schema.createTable('tattooGallery', (table) => {
      table.increments('id').primary()
      table.integer('Date')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tattooGallery')
  };
  