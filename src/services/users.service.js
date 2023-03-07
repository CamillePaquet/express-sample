
const userRepository = require('../repositories/users.repository');


function create(user){
  const result = userRepository.create(user);

  return result;
}


module.exports = {
  create,
}