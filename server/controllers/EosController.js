'use strict'
const Eos = require('../models/Eos');

let createEvent = (req, res, next) => {
  Eos.create({
    eventName: req.body.name,
    eventTitle: req.body.title,
    email: req.body.email,
    dateCreated: req.body.date
  }, (err, data) => {
    if (err) {
      console.log('ini error' + err);
      res.send(err)
    } else {
      res.json(data);
    }
  })
}

let listEvents = (req, res, next) => {
  Eos.find({}, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err)
    } else {
      res.json(data);
    }
  })
}

module.exports = {
  createEvent,
  listEvents
}
