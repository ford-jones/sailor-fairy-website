
import request from 'superagent'

const rootUrl = '/api/v1'

export function postFlashImage(img) {
  return request
    .post(rootUrl + '/flashImages')
    .send(img)
    .then((req) => {
      return req
    })
}