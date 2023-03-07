
const userRepository = require('../repositories/users.repository');


async function create(user){
  const result = userRepository.create(user);

  return {result};
}


module.exports = {
  create,
}