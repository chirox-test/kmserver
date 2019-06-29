const express = require('express')
const datastore = require('nedb')
const fetch = require('node-fetch')


const app = express()
const database = new datastore('database.db')
database.loadDatabase()


app.listen(3000, () => console.log('Listening at 3000'))
app.use(express.static('public'))
app.use(express.json({limit : '1mb'}))


app.post('/reason', (request,response) => {
    console.log('I got a post request')
    console.log(request.body)
    database.insert({ timestamp: Date.now(), data: request.body})
    response.json({
        status: 'Success',
        data: request.body
    })
})

app.get('/db', (request,response) => { 
    console.log('I got a get request')
    database.find({}, (err,data) => {
        if(err) {
            console.log(err)
            return
        }
        response.json(data)
    })
})
