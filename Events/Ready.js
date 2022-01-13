/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const { Client } = require('../index');
const { createCmd } = require('../dataHandler');

Client.on('ready', async () => {
  Client.user.setPresence({ activities: [{ name: 'You...', type: 'WATCHING' }] });
  console.log(`${Client.user.username} is now online!`);

  createCmd(Client, '781932135631028244');
});
