let vehicles = [];

exports.findAll = async () => {
  return vehicles;
};

exports.create = async (data) => {
  const vehicle = {
    id: Date.now(),
    brand: data.brand,
    model: data.model,
    year: data.year,
    mileage: data.mileage || 0,
  };

  vehicles.push(vehicle);
  return vehicle;
};