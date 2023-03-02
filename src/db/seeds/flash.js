
exports.seed = function (knex) {
    return knex('flash')
      .del()
      .then(function () {
        return knex('flash').insert([
          {
            id: 1,
            Date: 12345,
            Filename: 'flashTest.png'
          },
        ])
      })
  }