const express = require('express') ;
const functions = require("firebase-functions")
const admin = require("firebase-admin");
const serviceAccount = require("./tester-fc7ea-firebase-adminsdk-mvh1e-ab6373a822.json") ;

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tester-fc7ea-default-rtdb.firebaseio.com"
});

app.get("/", function(req, res) {
    res.send('heyyyy')
})

app.get("/test", function(req, res) {
    res.send('test')
})

exports.api = functions.runWith({}).https.onRequest(app)