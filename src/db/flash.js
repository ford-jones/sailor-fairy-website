
const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

const usr = process.env.MONGODB_USERNAME
const pw = process.env.MONGODB_PW
const database = process.env.MONGODB_FLASH_DB
const cltn = process.env.MONGODB_FLASH_CLN

const uri = `mongodb+srv://${usr}:${pw}@sailorfairy.gtdlrmi.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

async function getFlash() {
        let dataArr = []
        
        const collection = client.db(database).collection(cltn).find()
        await collection.forEach((data) => {
            return dataArr.push(data)
        })

    return dataArr
    
}

function postFlash(data) {
    return client.db(database).collection(cltn).insertOne(data)
}

module.exports = {
    getFlash,
    postFlash
}