var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    userName : String,
    email : String
});
mongoose.model('Book', UserSchema);