var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Book = mongoose.model('Book');

router.get('/', function(req, res, next) {
  res.send('server works');
});

router.get('/API/bookings/', function(req, res, next) {
  Book.find(function(err, bookings) {
    if (err) { 
      return next(err); }
    res.json(bookings);
  });
});

router.post('/API/bookings/', function (req, res, next) {
  let book = new Book(req.body);
 book.save(function(err, rec) {
    if (err){ 
      return next(err); }
    res.json(rec);
  });
}); 


router.param('booking', function(req, res, next, id) {
  let query = Book.findById(id);
  query.exec(function (err, booking){
    if (err) { return next(err); }
    if (!booking) { return next(new Error('not found ' + id)); }
    req.booking = booking;
    return next();
  });
}); 

router.get('/API/booking/:booking', function(req, res) {
  res.json(req.booking);
});

module.exports = router;