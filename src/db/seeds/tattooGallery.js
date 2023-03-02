
exports.seed = function (knex) {
    return knex('tattooGallery')
      .del()
      .then(function () {
        return knex('tattooGallery').insert([
          {
            id: 0,
            date: 12345,
          },
        ])
      })
  }