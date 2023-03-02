
exports.seed = function (knex) {
    return knex('flash')
      .del()
      .then(function () {
        return knex('flash').insert([
          {
            id: 0,
            date: 12345,
          },
        ])
      })
  }