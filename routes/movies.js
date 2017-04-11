var express = require('express');
var router = express.Router();
var db = require('../db/connection');

router.get('/', getAllMovies('movies'));

// ======== GET ALL MOVIES ========
function getAllMovies() {
  return function(req, res, next) {
    db('movies').select('*').then(movies => {
      res.render('movies/index', {
        movies: movies[0].title,
        director: movies[0].director,
        year: movies[0].year,
        rating: movies[0].my_rating,
        poster: movies[0].poster_url
      })
    })
  }
}


// ======== GET ONE MOVIE =========
function getOneMovie() {
  // router.get('/', function(req, res, next) {
  //   db('movies').select('*').where('id', req.params.id) then(movies => {
  //    res.render('movies/index', {
  //    movies: movies[0].title,
  //    director: movies[0].director,
  //    year: movies[0].year,
  //    rating: movies[0].my_rating,
  //    poster: movies[0].poster_url
  //     });
  //   });
  // });
}


// PUT /movies/

// PATCH /movies/:id

// DELETE /movies/:id

// ======== ADD ONE MOVIE =========
// POST /movie

// GET /movies/new

// GET /movies/:id/edit

module.exports = router;
