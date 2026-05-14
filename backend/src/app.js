const express = require('express');
const cors = require('cors');

const vehicleRoutes = require('./modules/vehicles/vehicle.routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.use('/api/vehicles', vehicleRoutes);

app.use(errorMiddleware);

module.exports = app;