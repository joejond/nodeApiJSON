//membuat Rest Api sederhana dari url
//https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const fs = require('fs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

const routes = require('./routes/routes.js')(app,fs)



app.listen(3000,()=>{
    console.log("server is running on port 3000")
})