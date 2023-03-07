
const helper = require('../utils/helper.util');
const config = require('../configs/general.config');
const Animal = mongoose.model('User', userSchema);


async function create(user){
  const result = new User({ name: user.name, username: user.username });

  return {result};
}


module.exports = {
  create,
}