const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id });
    const now = new Date();
    const formattedDate = now.toISOString().slice(0,16);
    console.log("THESE ARE TICKETRS", tickets);
    res.render('flights/show', { title: 'Flight Details', flight, tickets})
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
};

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
};

async function create(req, res) {
    req.body.flightNo = parseInt(req.body.flightNo);
    req.body.departs = new Date(req.body.departs);

    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
}
