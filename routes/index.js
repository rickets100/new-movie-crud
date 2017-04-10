var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let temp = "blah blah";
  res.render('index', { title: temp });
  // res.locals refers to the title temp thing above
});

// GET

// GET /movies
// GET /movies/:id
// PUT /movies/
// PATCH /movies/:id
// DELETE /movies/:id
// POST /movie
// GET /movies/new
// GET /movies/:id/edit

module.exports = router;
