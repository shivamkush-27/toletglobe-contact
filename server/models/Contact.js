const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', contactSchema);
