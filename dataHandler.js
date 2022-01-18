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
    // Bio
    // {
    //   name: 'bio',
    //   description: 'Edit your own, or look up someone else\'s profile',
    //   options: [{
    //     name: 'option',
    //     description: 'Choose something to edit',
    //     type: 'STRING',
    //     choices: [
    //       {
    //         name: 'name',
    //         value: 'username',
    //       },
    //       {
    //         name: 'hobby',
    //         value: 'userhobby',
    //       },
    //       {
    //         name: 'id',
    //         value: 'userid',
    //       },
    //       {
    //         name: 'thumbnail',
    //         value: 'img',
    //       },
    //       {
    //         name: 'describe',
    //         value: 'description',
    //       },
    //       {
    //         name: 'youtube',
    //         value: 'yt',
    //       },
    //       {
    //         name: 'spotify',
    //         value: 'music',
    //       },
    //       {
    //         name: 'twitch',
    //         value: 'stream',
    //       },
    //       {
    //         name: 'instagram',
    //         value: 'insta',
    //       },
    //       {
    //         name: 'lookup',
    //         value: 'userlookup',
    //       },
    //     ],
    //     required: true,
    //   }],
    // },
    // Dog
    {
      name: 'dog',
      description: 'Get Dog Images',
    },
  ];
  await Client.guilds.cache.get('781932135631028244')?.commands.set(data);
}

module.exports = { createCmd };
