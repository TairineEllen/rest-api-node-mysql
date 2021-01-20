const express = require('express');
const router = express.Router();
const controller = require('../controllers/appointmentsController');

router.get('/', controller.getAppointments);
router.post('/', controller.createAppointments);

module.exports = router;
