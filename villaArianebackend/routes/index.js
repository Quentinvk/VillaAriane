var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
let mongoose = require('mongoose');
let Book = mongoose.model('Book');

// router.get('/Api/book/', function(req, res, next){
//   Recipe.find(function(err, book) {
//     if (err) { return next(err); }
//     res.json(recipes);
//   });
// });

router.post('/API/book/', function (req, res, next) {
  let book = new Book(req.body);
  recipe.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
}); 