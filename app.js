const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",  { useUnifiedTopology: true });

app.use(cors());

let dbClient;

app.use(express.static(__dirname + "/build/"));

  mongoClient.connect(function(err, client) {
    if (err) {
      return console.log(err);
    }
    dbClient = client;
    app.locals.db = dbClient.db("testdb");

    app.listen(3001);
  })

app.get("/display/:displayId", function (req, res) {
  let collection = req.app.locals.db.collection("displays");
  const displayId = req.params["displayId"];
  collection.findOne({displayId: displayId}, function (err, display) {
    if (err) return console.log(err);
    const collection = req.app.locals.db.collection("testcol");
    collection.findOne({"_id":display.stateId}, function (err, state) {
      if (err) return console.log(err);
      res.send(state);
    })
  })  
})


process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});







