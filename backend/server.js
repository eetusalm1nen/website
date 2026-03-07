require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 1. Alustetaan sovellus
const app = express();

// 2. Middlewaret (TÄRKEÄÄ: Näiden on oltava ennen reittejä)
app.use(cors()); 
app.use(express.json());

// 3. Tietokantayhteys
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Tietokantayhteys kunnossa!'))
  .catch(err => console.error('Yhteysvirhe:', err));

// 4. Reitit (Routes)
// Huom: Varmista että tiedostonimi ja polku on oikein (aiemmin puhuttiin contentRoutesista)
const contentRoutes = require('./routes/contentRoutes'); // Oletetaan että tämä on oikea reittitiedosto
app.use('/api/content', contentRoutes);

// Perusreitti palvelimen testaamiseen selaimella
app.get('/', (req, res) => {
  res.send('Server is running');
});

// 5. Portti ja käynnistys
const PORT = process.env.PORT || 5050; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});