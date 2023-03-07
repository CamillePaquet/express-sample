function userFactory(name, username) {
  var user = {}; //creating a new temporary object
  //Create class properties
  user.name = name;
  user.username = username;

  return user;
};

module.exports = userFactory;