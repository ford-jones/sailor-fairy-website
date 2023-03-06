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