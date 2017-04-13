var express = require('express');
var router = express.Router();

// ======== GET HOME PAGE ========
router.get('/', function(req, res, next) {
  let splash = "Movies!";
  res.render('index', { title: splash });
  // res.locals refers to the title temp thing above
});

module.exports = router;
