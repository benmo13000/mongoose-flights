const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', {flights });
};

function newFlight(req, res) {
    //
    //
    res.render('flights/new', {errorMsg: '' });
};

async function create(req, res) {
    console.log(req.body);
    //
    // req.body.airline = 
    // //
    // req.body.airport = 
    // req.body.flightNo = 
    // req.body.departs = 
}

