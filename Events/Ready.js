/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const { Client } = require('../index');
const { createCmd } = require('../dataHandler');

Client.on('ready', async () => {
  const statuses = [
    'You...',
    'Sks',
    'Youtube',
    'Twitch',
    'Prn',
    'the minecraft server',
    'Beast Smp',
  ];
  const status2 = statuses[Math.floor(Math.random() * statuses.length)];
  Client.user.setPresence({ status: 'idle' });
  Client.user.setActivity({ name: status2, type: 'WATCHING' });

  setInterval(() => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    Client.user.setActivity({ name: status, type: 'WATCHING' });
  }, 10000);

  console.log(`${Client.user.username} is now online!`);

  createCmd(Client, '781932135631028244');
});
