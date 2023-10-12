const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const destinationSchema= new Schema({
    airportArrival: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "PDX", "LAX", "SAN", "GAY"]
    },
    arrival: {
        type: Date,
    },
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Spirit', 'United']},
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "PDX", "LAX", "SAN", "GAY"]},
  flightNo: {
    type: Number,
    min: 1, 
    max: 9999},
  departs: {type: Date },
  destinations: [destinationSchema],
});



module.exports = mongoose.model('Flight', flightSchema);


// {
//     timestamps: true
// }