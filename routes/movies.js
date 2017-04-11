var express = require('express');
var router = express.Router();
var db = require('../db/connection');


// ======== GET ALL MOVIES =========

router.get('/', (req, res) => {
  db('movies').select('*')
    .then(function(movies) {
      var movieStr = JSON.stringify(movies);
      res.render('movies/index', {
        allMovies: movieStr
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
