
const helper = require('../utils/helper.util');
const userModel = require('../models/user');
const jwt = require('jsonwebtoken');

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
    result.value = "CREATED";
    result.message = "User created successfully";
  } catch (error) {
    result.value = "ERROR";
    result.message = "Error creating user";
  }
  return result;
}

async function login(user) {
  const result = {
    value: "",
    message: ""
  };
  try {
    const query = userModel.where({ username: user.username, password: user.password });
    const userRepo = await query.findOne();

    if (!userRepo) { 
      result.value = "NOT_FOUND";
      result.message = "Error. Wrong login or password";
    } else {
      const token = jwt.sign({
        id: userRepo.id,
        username: userRepo.username
      }, process.env.SECRET, { expiresIn: '3 hours' })
      
      result.value = "OK";
      result.message = { access_token: token }
    }
  } catch (error) {
    result.value = "INTERNAL_SERVER_ERROR";
    result.message = `Error creating user: ${error.message}`;
  }
  return result;
}

async function profil(id) {
  const result = {
    value: "",
    message: ""
  };
  try {
    console.log(id)
    const query = userModel.where({ id: id });
    const userRepo = await query.findOne();
    console.log(userRepo)

    if (!userRepo) { 
      result.value = "NOT_FOUND";
      result.message = "Error. Wrong login or password";
    } else {
      
      result.value = "OK";
      result.message = { access_token: token }
    }
  } catch (error) {
    result.value = "INTERNAL_SERVER_ERROR";
    result.message = `Error creating user: ${error.message}`;
  }
  return result;
}



module.exports = {
  create,
  login,
  profil
}