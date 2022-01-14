/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const { mongoPath } = require('./config.json');

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose;
};

mongoose.connection.on('connected', () => {
  console.log('✅Connected to Database');
});
