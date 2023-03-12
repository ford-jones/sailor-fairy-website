import request from "superagent";

const rootUrl = "/api/v1"

export function fetchGallery() {
    return request
    .get(rootUrl + "/gallery")
    .then((res) => {
        return res.body
    })
    .catch((err) => {
        console.error(err.message)
    })
}

export function postTattoo(data) {
    return request
    .post(rootUrl + "/gallery")
    .send(data)
    .then((res) => {
        console.log('api data: ', res)
        return res
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export function deleteTattoo(data) {
    return request
    .del(rootUrl + "/gallery")
    .send(data)
    .then((res) => {
        return res
    })
    .catch((err) => {
        console.error(err.message)
    })
}