const express = require('express');
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('db.json')
// const db = low(adapter)

const app = express()

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
 })
 
 // This responds a POST request for the homepage
 app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
 })
 
 // This responds a DELETE request for the /del_user page.
 app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
 })
 
 // This responds a GET request for the /list_user page.
 app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
 })
 
 // This responds a GET request for abcd, abxcd, ab123cd, and so on
 app.get('/ab*cd', function(req, res) {   
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
 })


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})



// const defaultData = {
//     posts: [
//         {
//             id:0,
//             authorId:0,
//             test: "this is the first time"
//         }
//     ],
//     authors: [
//         {
//             id:0,
//             name:"Dennis"
//         }
//     ]
// };

// db.defaults(defaultData).write();


