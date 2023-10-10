const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
	
// const flightSchema = new Schema({
//   airline: {
//     type: String,
//     enum: ['American', 'Spirit', 'United']},
//   airport: {
//     type: String,
//     enum: [AUS, DFW, DEN, PDX, LAX, SAN]},
//   flightNo: {
//     type: Number,
//     min: 10, 
//     max: 9999},
//   departs: Date,
// }, {
//     timestamps: true
// });

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
})




module.exports = mongoose.model('Flight', flightSchema);