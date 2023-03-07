const mongoose = require('../configs/db.config');

const userSchema = new mongoose.Schema({
  name: String,
  username: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;