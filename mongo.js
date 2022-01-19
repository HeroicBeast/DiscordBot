/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const { mongoPath } = require('./config.json');
const { Client } = require('./index');

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose;
};

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to Database');
  Client.on('ready', () => [
    Client.channels.cache.get('932941302163734539').send('\\✅ Connected to Database'),
  ]);
});
