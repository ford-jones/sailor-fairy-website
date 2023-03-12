import request from "superagent";

const rootUrl = "/api/v1"

export function fetchFlash() {
    return request
    .get(rootUrl + "/flash")
    .then((res) => {
        return res.body
    })
    .catch((err) => {
        console.error(err.message)
    })
}

export function postFlash(data) {
    return request
    .post(rootUrl + "/flash")
    .send(data)
    .then((res) => {
        console.log('api data: ', res)
        return res
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export function deleteFlash(data) {
    return request
    .del(rootUrl + "/flash")
    .send(data)
    .then((res) => {
        return res
    })
    .catch((err) => {
        console.error(err.message)
    })
}