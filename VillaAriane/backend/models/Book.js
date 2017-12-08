var mongoose = require('mongoose');

var BookingSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    startNight : Date,
    endNight : Date,
    NrOfPersons : Number,
    wantsSheet : Boolean

});
mongoose.model('Book', BookingSchema);