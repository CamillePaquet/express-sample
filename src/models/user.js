const mongoose = require('../configs/db.config');

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  // role: String,
  // createdAt: Date,
  // avatar: String,
  // email: String,
  // phone: String,
  // address: String,
  // city: String,
  // postalCode: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;