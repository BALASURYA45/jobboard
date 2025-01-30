const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  tell_about_yourself: { type: Number, required: true },
});

module.exports = mongoose.model('Application', ApplicationSchema);