const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/express-sample' ,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database!');

  })
  .catch((error) => console.error(error));

mongoose.connection.on('error', (error) => console.error('Error connecting to database: ', error));
mongoose.connection.on('disconnected', () => console.log('Disconnected from database'));
module.exports = mongoose;