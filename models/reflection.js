const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const reflectionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Reflection = mongoose.model('reflection', reflectionSchema);
