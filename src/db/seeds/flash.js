
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
          {
            id: 2,
            Date: 12345,
            Filename: 'IMG-0075.JPG'
          },
          {
            id: 3,
            Date: 12345,
            Filename: 'IMG-1313.jpg'
          },
          {
            id: 4,
            Date: 12345,
            Filename: 'IMG-1368.jpg'
          },
          {
            id: 5,
            Date: 12345,
            Filename: 'IMG-1369.jpg'
          },
          {
            id: 6,
            Date: 12345,
            Filename: 'IMG-1370.jpg'
          },
          {
            id: 7,
            Date: 12345,
            Filename: 'IMG-1371.jpg'
          },
          {
            id: 8,
            Date: 12345,
            Filename: 'IMG-1372.jpg'
          },
          {
            id: 9,
            Date: 12345,
            Filename: 'IMG-1373.jpg'
          },
          {
            id: 10,
            Date: 12345,
            Filename: 'IMG-1374.jpg'
          },
          {
            id: 11,
            Date: 12345,
            Filename: 'IMG-1375.jpg'
          },
          {
            id: 12,
            Date: 12345,
            Filename: 'IMG-1376.jpg'
          },
          {
            id: 13,
            Date: 12345,
            Filename: 'IMG-1423.PNG'
          },
          {
            id: 14,
            Date: 12345,
            Filename: 'IMG-1424.jpg'
          },
          {
            id: 15,
            Date: 12345,
            Filename: 'IMG-1425.jpg'
          },
          {
            id: 16,
            Date: 12345,
            Filename: 'IMG-1455.jpg'
          },
          {
            id: 17,
            Date: 12345,
            Filename: 'IMG-1456.jpg'
          },
          {
            id: 18,
            Date: 12345,
            Filename: 'IMG-1457.jpg'
          },
        ])
      })
  }