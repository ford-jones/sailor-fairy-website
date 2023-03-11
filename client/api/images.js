
import request from 'superagent'

const rootUrl = '/api/v1'

export function postImage(img) {
  return request
    .post(rootUrl + '/images')
    .send(img)
    .then((req) => {
      return req
    })
}