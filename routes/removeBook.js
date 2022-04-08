var bookSchema = require('../schemas/BookSchema');
var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();
var Book = mongoose.model('Book', bookSchema);
/* GET remove-book page. */
router.get('/', function(req, res, next) {
    Book.find({}).exec((err, _books) => {
        if(err) res.render('error', { message: 'Something went wrong', error: err });
        else res.render('removeBook', { books: _books });
    })

});

/* GET remove-book page. */
router.post('/', function(req, res, next) {
    var _id = req.body.book_id;
    console.log(_id);
    Book.findOneAndDelete(_id, function(err, _) {
        if(err) res.render('error', { message: 'Something went wrong', error: err });
        else res.redirect('/');
    });
});

module.exports = router;
