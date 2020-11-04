var express = require('express');
var router = express.Router();
var books = require('../resources/books');
let  Books = require('../models/books')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   Books.find({}, function(err, books) {
//     if (!err) {
//       res.render('index', { title: 'Book App', bookList: books });
//     } else {
//       console.log('error', err);
//     }
//   })

//   // res.render('index', { title: 'BookAPP' , bookList:books});
// });

router.get('/', async function(req,res,next){
  let books = await Books.find();
  res.render('index', { title: 'Book App', bookList: books });
});

router.get('/samriddhi', function(req, res, next) {
  res.render('index', { title: 'Samriddhi' });
});


module.exports = router;
