import request from 'superagent'

const rootUrl = '/api/v1'

export function postTattooImage(img) {
  return request
    .post(rootUrl + '/tattooImages')
    .send(img)
    .then((req) => {
      return req
    })
}