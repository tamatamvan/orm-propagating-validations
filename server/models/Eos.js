'use strict'

const mongoose = require('mongoose')
const validate = require('mongoose-validator');

let emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Please provide a valid email address'
  })
]

let EosSchema = new mongoose.Schema ({
  eventName: {
    type: String,
    required: true
  },
  eventTitle: {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true,
    validate: emailValidator
  },
  dateCreated: Date
})

module.exports = mongoose.model('Eos', EosSchema)
