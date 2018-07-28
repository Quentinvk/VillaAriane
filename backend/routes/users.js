let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = mongoose.model('User');
let passport = require('passport');

router.post('/register', function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'Please fill out all fields' });
  }
  let user = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);
  console.log(username);
  user.save(function(err) {
    var token;
    token = user.generateJWT();
    res.status(200);
    res.json({
      "token" : token
    });
  });
});

router.post('/login', function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'Please fill out all fields' });
  }
  
  passport.authenticate('local', function(err, user, info){
    var token;
    console.log("logging in");
    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }
    
    // If a user is found
    if(user){
      token = user.generateJWT();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res, next);
});

router.post('/checkusername', function(req, res, next) {
  User.find({ username: req.body.username }, function(err, result) {
    if (result.length) {
      res.json({ username: 'alreadyexists' });
      
    } else {
      res.json({ username: 'ok' });
    }
  });
});
module.exports = router;
