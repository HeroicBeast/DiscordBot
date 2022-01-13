/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

async function createCmd(Client, guildID) {
  const data = [
    // Echo
    {
      name: 'echo',
      description: 'Echo your text!',
      options: [{
        name: 'text',
        type: 'STRING',
        description: 'The input to echo back',
        required: true,
      }],
    },
    // Ip
    {
      name: 'ip',
      description: 'Information about the Minecraft Server',
    },
    // Min
    {
      name: 'min',
      description: 'Change minutes to seconds',
      options: [{
        name: 'minutes',
        type: 'NUMBER',
        description: 'Number of minutes to convert into seconds.',
        required: true,
      }],
    },
    // Avatar
    {
      name: 'avatar',
      description: 'Get your own, or someone else\'s avatar',
      options: [{
        name: 'user',
        type: 'USER',
        description: 'User you want the avatar of',
        required: false,
      }],
    },
    // Cat
    {
      name: 'cat',
      description: 'Get Cat Images',
    },
  ];
  await Client.guilds.cache.get('781932135631028244')?.commands.set(data);
}

module.exports = { createCmd };
