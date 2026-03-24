const express = require('express');
const router = express.Router();
// Otetaan skeema käyttöön
const Content = require('../data/Content');

// Hae sisältö (GET http://localhost:5050/api/content)
router.get('/', async (req, res) => {
  try {
    const content = await Content.findOne();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tallenna/Päivitä sisältö (POST http://localhost:5050/api/content)
router.post('/', async (req, res) => {
    console.log("Backend sai datan:", req.body);
  const { headerSub, bio, linkedinUrl, contactText, contactSecondary, projects } = req.body;
  
  try {
    const updatedContent = await Content.findOneAndUpdate(
      {}, 
      { headerSub, bio, linkedinUrl, contactText, contactSecondary, projects }, 
      { upsert: true, new: true }
    );
    res.status(200).json(updatedContent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;