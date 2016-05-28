var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var DRUGS_COLLECTION = "drugs";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    //db.close();

    var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  }); 


});


//mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
//  if (err) {
//    console.log(err);
//    process.exit(1);
//  }

  // Save database object from the callback for reuse.
//  db = database;
//  console.log("Database connection ready");

  // Initialize the app.
//  var server = app.listen(process.env.PORT || 8080, function () {
//    var port = server.address().port;
//    console.log("App now running on port", port);
//  });
//});


// API Routes Below

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/drugs"
 *    GET: finds all drugs
 *
 */
app.get("/api/v1/drugs", function(req, res){
    db.collection(DRUGS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get drugs.");
    } else {
      res.status(200).json(docs);
    }
  });
});


// app.post("/drugs", function(req, res) {
//   var newDrug = req.body;
//   newDrug.createDate = new Date();
//
//   // if (!(req.body.firstName || req.body.lastName)) {
//   //   handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
//   // }
//
//   db.collection(DRUGS_COLLECTION).insertOne(newDrug, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to create new drug.");
//     } else {
//       res.status(201).json(doc.ops[0]);
//     }
//   });
// });


/*  "/drugs/:id"
 *    GET: find drug by id
 *
 *
 */

app.get("/api/v1/drugs/:id", function(req, res) {
  db.collection(DRUGS_COLLECTION).findOne({ "name" : req.params.id }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get drug");
    } else {
      res.status(200).json(doc);
    }
  });
});
