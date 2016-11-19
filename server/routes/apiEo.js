'use strict'
const express = require('express');
const router = express.Router();
const EosController = require('../controllers/EosController');
/* GET users listing. */
router.get('/', EosController.listEvents);
router.post('/', EosController.createEvent)

module.exports = router;
