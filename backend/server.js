const express = require('express');

const app = express();
const PORT = 3000;

// Middleware JSON
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.send('Backend DriveLedger opérationnel');
});

// Route API test
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    app: 'DriveLedger API'
  });
});

// Démarrage serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});