const userSchema = new mongoose.Schema({
  name: String,
  username: String
});

const User = mongoose.model('User', userSchema);