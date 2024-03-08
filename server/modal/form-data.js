
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String},
  message: { type: String}
})

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
