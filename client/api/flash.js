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