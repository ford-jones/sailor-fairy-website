
exports.seed = function (knex) {
    return knex('tattooGallery')
      .del()
      .then(function () {
        return knex('tattooGallery').insert([
          {
            id: 1,
            Date: 12345,
            Filename: 'tattooGalleryTest.png'
          },
        ])
      })
  }