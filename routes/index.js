var bookSchema = require('../schemas/BookSchema');
var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();
var Book = mongoose.model('Book', bookSchema);
/* GET home page. */
router.get('/', function(req, res, next) {
  Book.find({}).exec((err, _books) => {
    if(err) res.render('error', { message: 'Something went wrong', error: err });
    else res.render('index', { title: 'Books', books: _books });
  })
});

module.exports = router;
