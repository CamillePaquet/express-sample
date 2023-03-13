
const userRepository = require('../repositories/users.repository');


function create(user){
  const result = userRepository.create(user);

  return result;
}

function login(user){
  const result = userRepository.login(user);

  return result;
}

function profil(user){
  const result = userRepository.login(user);

  return result;
}


module.exports = {
  create,
  login,
  profil
}