const express = require('express');
const router = express.Router()
const Booking = require('../models/bookings')

//add appointment
router.post('/bookings',(req, res, next)=>{
    let newBooking = new Booking({
        date: req.body.date,
        from: req.body.from,
        to: req.body.to,
        booker_name: req.body.booker_name,
        email: req.body.email,
        tel: req.body.tel,
        billing_data: req.body.billing_data
    });

    newBooking.save((err, contact)=>{
        if(err){
            res.json({msg: 'Failed to add booking'+err})
        }
        else{
            res.json({msg: 'Booking added successfully'})
        }
    })
})

module.exports = router;