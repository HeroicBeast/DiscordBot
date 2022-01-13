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
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  setInterval(
    (
      Client.user.setPresence({ activities: { name: status, type: 'WATCHING' } })
    ), 60000,
  );
  console.log(`${Client.user.username} is now online!`);

  createCmd(Client, '781932135631028244');
});
