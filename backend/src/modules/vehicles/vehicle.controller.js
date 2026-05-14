const vehicleService = require('./vehicle.service');

exports.getAll = async (req, res, next) => {
  try {
    const vehicles = await vehicleService.getAll();
    res.json(vehicles);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const vehicle = await vehicleService.create(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    next(error);
  }
};