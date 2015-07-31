//-- Declare mongo
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var Db = mongodb.Db;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/Program';


var name = process.argv[2];
var isUp = ('true' === process.argv[3]);



function terminalCall() {
  if (!process.argv[3]) {
    console.log((db.collection('clickfiles').find({"name": name})));
  } else {

    initDoc(name, isUp);

  }
}

function initDoc(name, isUp) {
  if (typeof name === "string" && typeof isUp === "boolean") {
    var insertDocument = function(db, collback) {
      db.collection('clickfiles').insertOne( {
        "name" : name,
        "clicksUp" : isUp,
        "counter" : 0,
      }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the click file collection.");
        callback(result);
      });
    };

    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      insertDocument(db, function(){
        db.close();
      });
    });
  } else {
    console.log('Please input the right arguments: name, counttype');
  }
}



//-- Call insertDocument


/*
var findClickFiles = function(db, callback) {
  var cursor = db.collection('clickfiles').find({"process": ""});
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc !== null) {
      console.dir(doc);
    } else {
      callback();
    }
  });
};
*/

//-- Call findClickFiles
/*
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findClickFiles(db, function() {
    db.close();
  });
});
*/
function incremCount(name) {
  var updateDocument = function(db, callback) {
    db.collection('clickfiles').updateOne(
      {"name": name},
      {
        $inc: {"counter" : 1} ,
        $currentDate: { "lastModified": true }
      }, function(err, results) {
        console.log(results);
        callback();
    });
  };

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    updateDocument(db, function(){
      db.close();
    });
  });
}

terminalCall();
//
