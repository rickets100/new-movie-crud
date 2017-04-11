var express = require('express');
var router = express.Router();

// ======== GET HOME PAGE ========
router.get('/', function(req, res, next) {
  let temp = "Look at this page.";
  res.render('index', { title: temp });
  // res.locals refers to the title temp thing above
});

module.exports = router;
