const vehicleRepository = require('./vehicle.repository');

exports.getAll = async () => {
  return vehicleRepository.findAll();
};

exports.create = async (data) => {
  return vehicleRepository.create(data);
};