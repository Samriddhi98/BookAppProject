var express = require('express');
var router = express.Router();
var books = require('../resources/books');
let Books = require('../models/books');

router.get('/add', function (req, res, next) {
    res.render('addBooks', {
        title: 'Add book',

    });

});

router.post('/save', function (req, res) {
    // console.log('insave fucntion....... ' , req.body)
    // books.push({...req.body, _id: `00${books.length + 1}`});
    const book = new Books(req.body);
    let promise = book.save();
    promise.then(() => {
        console.log('Book added');
        res.redirect('/');
    })

});

router.get('/remove/:id', function (req, res) {
    Books.remove({ _id: req.params.id }, function () {
        res.redirect('/');
    })
    // console.log(req.params._id);
    // books.splice(req.params.index,1);
    //  res.redirect('/');
});

router.get('/edit/:id', function (req, res) {
    //    const book = books.find((book) => book._id === req.params._id);
    //    //console.log('book to edit.......',book);
    //    res.render('editBooks',{
    //        title: 'Edit Book',
    //        book
    //    })

    Books.findOne({ _id: req.params.id }, function (err, book) {
        res.render('editBooks', {
            title: 'Edit Book',
            book: book
        });
    })
});



router.post('/edit/:_id', function (req, res) {
    // const book = books.find((book) => book._id === req.params._id);
    //     book.title = req.body.title
    //     book.author = req.body.author
    //     book.description = req.body.description
    //     book.genre = req.body.genre
    //     res.redirect('/');

    Books.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, function (err, book) {
        console.log(book);
        res.redirect('/');

    });
});


module.exports = router;