
exports.seed = function (knex) {
    return knex('flash')
      .del()
      .then(function () {
        return knex('flash').insert([
          {
            id: 1,
            Date: 12345,
            Filename: 'flashTest.png',
            Taken_status: 0
          },
          {
            id: 2,
            Date: 12345,
            Filename: 'IMG-0075.JPG',
            Taken_status: 0
          },
          {
            id: 3,
            Date: 12345,
            Filename: 'IMG-1313.jpg',
            Taken_status: 1
          },
          {
            id: 4,
            Date: 12345,
            Filename: 'IMG-1368.jpg',
            Taken_status: 0
          },
          {
            id: 5,
            Date: 12345,
            Filename: 'IMG-1369.jpg',
            Taken_status: 0
          },
          {
            id: 6,
            Date: 12345,
            Filename: 'IMG-1370.jpg',
            Taken_status: 0
          },
          {
            id: 7,
            Date: 12345,
            Filename: 'IMG-1371.jpg',
            Taken_status: 1
          },
          {
            id: 8,
            Date: 12345,
            Filename: 'IMG-1372.jpg',
            Taken_status: 0
          },
          {
            id: 9,
            Date: 12345,
            Filename: 'IMG-1373.jpg',
            Taken_status: 1
          },
          {
            id: 10,
            Date: 12345,
            Filename: 'IMG-1374.jpg',
            Taken_status: 0
          },
          {
            id: 11,
            Date: 12345,
            Filename: 'IMG-1375.jpg',
            Taken_status: 0
          },
          {
            id: 12,
            Date: 12345,
            Filename: 'IMG-1376.jpg',
            Taken_status: 0
          },
          {
            id: 13,
            Date: 12345,
            Filename: 'IMG-1423.PNG',
            Taken_status: 0
          },
          {
            id: 14,
            Date: 12345,
            Filename: 'IMG-1424.jpg',
            Taken_status: 0
          },
          {
            id: 15,
            Date: 12345,
            Filename: 'IMG-1425.jpg',
            Taken_status: 0
          },
          {
            id: 16,
            Date: 12345,
            Filename: 'IMG-1455.jpg',
            Taken_status: 0
          },
          {
            id: 17,
            Date: 12345,
            Filename: 'IMG-1456.jpg',
            Taken_status: 0
          },
          {
            id: 18,
            Date: 12345,
            Filename: 'IMG-1457.jpg',
            Taken_status: 0
          },
        ])
      })
  }