var mongoose = require('mongoose');

var BookingSchema = new mongoose.Schema({
    userName : String,
    startNight : Date,
    endNight : Date,
    nrOfPersons : Number,
    wantsSheet : Boolean

});
mongoose.model('Book', BookingSchema);