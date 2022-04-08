var bookSchema = require('../schemas/BookSchema');
var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();
var Book = mongoose.model('Book', bookSchema);
/* GET add-book page. */
router.get('/', function(req, res, next) {
    res.render('addBook');
});

/* GET add-book page. */
router.post('/', function(req, res, next) {
    var _name = req.body.book_name;
    var _author = req.body.book_author;
    if((_name === "" || !_name) || (_author === "" || !_author)) {
        console.log(name);
        console.log(author);
        res.render('addBook');
    } else {
        Book.init();
        var newBook = new Book({ name: _name, author: _author});

        newBook.save(function (err, _) {
           if(err) res.render('error', { message: 'Something went wrong', error: err });
           else res.redirect('/');
        });
    }

});

module.exports = router;
