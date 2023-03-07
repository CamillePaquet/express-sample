
const helper = require('../utils/helper.util');
const userModel = require('../models/user');

const mongoose = require('mongoose');

const User = mongoose.model('User', userModel.userSchema);

function create(user) {
  const userRepo = new userModel({ name: user.name, username: user.username });
  const result = {
    value: "",
    message: ""
  };
  try {
    userRepo.save();
    console.log('User created successfully');
    result.value = "CREATED";
    result.message = "User created successfully";
  } catch (error) {
    console.error(error);
    result.value = "ERROR";
    result.message = "Error creating user";
  }
  console.log(result);
  return result;
}


module.exports = {
  create,
}