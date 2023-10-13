const Ticket= require('../models/ticket');
const Flight= require('../models/flight');


async function newTicket(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        res.render('tickets/new', { flight });
    }catch (err) {
        console.log(err);
    }
    }

    async function create(req, res) {
        const ticketInfo = req.body
        const flightId = req.params.id;
        console.log("before", ticketInfo)
        ticketInfo.flight = flightId
        console.log("after", ticketInfo)
        try{
            const ticket = await Ticket.create(ticketInfo)
            console.log(ticket)
            res.redirect(`/flights/${flightId}`);
        } catch(err) {
            console.log(err)
        }
    }

    module.exports={
        create,
        new: newTicket,
    }