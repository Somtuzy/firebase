const express = require('express') ;
const functions = require("firebase-functions")
const admin = require("firebase-admin");
const serviceAccount = require("./service_account.json") ;

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

app.get("/", function(req, res) {
    res.send('heyyyy')
})

app.get("/test", function(req, res) {
    res.send('test')
})

exports.api = functions.runWith({}).https.onRequest(app)