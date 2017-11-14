var express = require('express');
var router = express.Router();
var firebase = require('./utils');

var rootRef = firebase.database().ref();

router.get('/', function(req, res, next) {
  res.send('Hello Api');
});

function userInfo(uid, user){
  var userRef = firebase.database().ref('/users');
}

module.exports = router;
