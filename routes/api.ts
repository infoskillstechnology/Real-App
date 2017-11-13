var express = require('express'
var router = express.Router();

// var config = {
//   apiKey: "AIzaSyALAeg_xYjtr6O3Ls-e1Bcef4r3vOrdDXs",
//   authDomain: "interview-question-62333964.firebaseapp.com",
//   databaseURL: "https://interview-question-62333964.firebaseio.com",
//   projectId: "interview-question-62333964",
//   storageBucket: "interview-question-62333964.appspot.com",
//   messagingSenderId: "222127983646"
// };

// firebase.initializeApp(config);

// var rootRef = firebase.database().ref();

router.get('/', function(req, res, next) {
  res.send('Hello Api');
});

module.exports = router;
