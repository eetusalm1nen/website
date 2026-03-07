const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  bio: String,
  linkedinUrl: String,
  headerSub: String,
  contactText: String,
  contactSecondary: String,
 
projects: [
    {
      description: String, // esim 
      category: String, // esim personal website/ rapsberry pi/ tms
      url: String // esim https://github.com/...
    }
  ]
});

module.exports = mongoose.model('Content', ContentSchema);