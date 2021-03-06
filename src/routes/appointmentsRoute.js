const express = require('express');
const router = express.Router();
const controller = require('../controllers/appointmentsController');

router.get('/', controller.getAppointments);
router.get('/:id', controller.getById);
router.post('/', controller.addAppointment);
router.patch('/:id', controller.updateById);
router.delete('/:id', controller.deleteById);

module.exports = router;
