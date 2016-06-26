var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var basicAuth = require('basic-auth');
var authCreds = require("./auth-creds.js");

var nodemailer = require('nodemailer');
var router = express.Router();


// var auth = function (req, res, next) {
//   function unauthorized(res) {
//     res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
//     return res.send(401);
//   };
//
//   var user = basicAuth(req);
//
//   if (!user || !user.name || !user.pass) {
//     return unauthorized(res);
//   };
//
//   if (user.name === authCreds.user && user.pass === authCreds.pass) {
//     return next();
//   } else {
//     return unauthorized(res);
//   };
// };

var DRUGS_COLLECTION = "drugs";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(session({secret: authCreds.secret}))

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var database;

// Connect to the database before starting the application server.
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://127.0.0.1:27017/db', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }

    database = db

    var server = app.listen(process.env.PORT || 80, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

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
  database.collection(DRUGS_COLLECTION).find({}).toArray(function(err, docs) {
	if (err) {
	    handleError(res, err.message, "Failed to get drugs.");
	} else {
	    res.status(200).json(docs);
	}
    });
});

/*  "/drugs"
 *    POST: save new drug
 */
app.post("/drugs", function(req, res) {
  var newDrug = req.body;
  console.log(req.body);
  newDrug.createDate = new Date();
  newDrug.updateDate = new Date();

  database.collection(DRUGS_COLLECTION).insertOne(newDrug, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new drug.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/drugs"
 *    PUT: update existing drug
 */
app.put("/drugs/:id", function(req, res) {
  var newDrug = req.body;
  newDrug.updateDate = new Date();

  // if (!(req.body.firstName || req.body.lastName)) {
  //   handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
  // }

  database.collection(DRUGS_COLLECTION).insertOne(newDrug, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new drug.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

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

app.post("/test", function(req,res) {
  console.log("test");
});

// Contact Form SMTP Server using NodeMailer

// app.use('/sayHello', router);
// router.post('/contact', handleSayHello);

app.post("/contact", function(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Zoho',
        auth: {
            user: authCreds.smtp.user, // Your email id
            pass: authCreds.smtp.pass // Your password
        }
    });

    var text = 'Hello world from \n\n' + req.body.name;

    var mailOptions = {
        from: 'info@emitcare.ca',
        replyTo: req.body.email,
        //req.body.name + ' &lt;' + req.body.email + '&gt;', // sender address
        to: 'info@emitcare.ca', // list of receivers
        subject: 'EMIT Contact Form', // Subject line
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
});
