const express = require('express');
const vehicleController = require('./vehicle.controller');

const router = express.Router();

router.get('/', vehicleController.getAll);
router.post('/', vehicleController.create);

module.exports = router;