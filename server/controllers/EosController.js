'use strict'
const Eos = require('../Models/Eos');

let createEvent = (req, res, next) => {
  Eos.create({
    eventName: req.body.eventName,
    eventTitle: req.body.title,
    email: req.body.email,
    dateCreated: req.body.dateCreated
  }, (err, data) => {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json(data);
    }
  })
}

let listEvents = () => {
  Eos.find({}, (err, data) => {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json(data);
    }
  })
}

module.exports = {
  createEvent,
  listEvents
}
