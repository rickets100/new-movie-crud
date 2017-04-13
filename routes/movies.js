var express = require('express');
var router = express.Router();
var db = require('../db/connection');

// ======== GET ALL MOVIES ========
router.get('/', function (req, res, next) {
  db('movies').select('*')
  .then(movies => {
    res.render('movies/index', { movies })
  })
})

// ========= GET FORMS PAGE ========
// THIS NEEDS TO BE BEFORE GET ONE MOVIE
router.get('/new', (req, res, next) => {
  console.log('hey');
  res.render('movies/new')
})

// ======== GET ONE MOVIE =========
router.get('/:id', function (req, res, next) {
  selectedId = req.params.id;
  db('movies').select('*')
  .where('id', selectedId)
  .first()
  .then(movie => {
    res.render('movies/show', { movie })
  })
  .catch(err => {
    res.send(err);
  })
})

// ======== ADD ONE MOVIE (PUT) ========
router.post('/', function (req, res, next) {
  var year = parseInt(req.body.year)
  var movie = {
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    my_rating: req.body['my-rating'],
    poster_url: req.body['poster-url']
  }
  if (Number.isNaN(year) || year < 1878 || year > 2018) {
    res.render('movies/new', { error: 'Invalid year.', movie })
  }
  if (Number.isNaN(my_rating)) {
    res.render('movies/new', { error: 'Rating needs to be a number.', movie })
  }
  else {
    db('movies').insert(movie, '*').
    then(newMovie => {
      var id = newMovie[0].id
      res.redirect(`/movies/${id}`)
    })
    .catch(err => {
      next(err);
      console.log(err);
    })
  }
})

// ======== ALTER ONE MOVIE ========
router.put ('/movies/:id', function(req, res, next) {
  var id = req.params.id
  var movie = {
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    my_rating: req.body['my-rating'],
    poster_url: req.body['poster-url']
  }
  db('movies').update(movie, '*')
  .where({ id })
  .then(updatedMovie => {
    var id = updatedMovie[0].id
    res.redirect(`/movies/${id}`)
  })
})

// ======== DELETE ONE MOVIE ========
router.delete('/:id', (req, res, next) => {
  var id = req.params.id
  db('movies').del()
  .where({ id })
  .then(() => {
    res.redirect(`/movies`)
  })
})

module.exports = router;
