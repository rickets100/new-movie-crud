var express = require('express');
var router = express.Router();
var db = require('../db/connection');


// ======== GET ALL MOVIES =========
router.get('/', function(req, res, next) {
  db('movies').select('*').then(movies => {
    var movieStr = JSON.stringify(movies)
    console.log(movieStr);
    res.render('movies/index', {
      movies: movieStr
    });
  });
});

// ======== GET ONE MOVIE ========


// PUT /movies/

// PATCH /movies/:id

// DELETE /movies/:id

// ======== ADD ONE MOVIE =========
// POST /movie

// GET /movies/new

// GET /movies/:id/edit

module.exports = router;
