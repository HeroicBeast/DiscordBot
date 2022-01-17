/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-useless-return */
/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable eqeqeq */
/* eslint-disable no-return-await */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
const { Client } = require('../index');

Client.on('messageCreate', async (message) => {
  if (message.author.bot || message.channel.type === 'DM') return;

  if (message.guild.id !== '781932135631028244') return message.reply('No.');

  if (message.content.toLowerCase().includes('doraemon')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`<@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('suneo')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`<@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('dora')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`<@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('shinchan')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`<@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('shin-chan')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`<@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('niggi')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`<@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('nigga')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`<@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('hittori')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`<@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('potty')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`<@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('tharki')) {
    return await message.react('<:skswhengrills:894437128140881970>');
  }

  if (message.content.toLowerCase().includes('https://api.creavite.co/out/f139cc60-94bb-4da0-a173-d75c62c83f57_standard.gif')) {
    return await message.delete().then(message.member.timeout(120000) && message.channel.send(`<@${message.author.id}> has been muted for 2 minutes`));
  }

  if (message.content.toLowerCase().includes('https://cdn.discordapp.com/attachments/851325180524888095/930504487523745792/video-output-C71AD518-35E3-44BE-840E-A07F4BFAE976.mp4')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`<@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('https://cdn.discordapp.com/attachments/766235212908462100/930401221011984434/cachedVideo.mp4')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('https://tenor.com/view/freaksandgeeks-blizzard-gif-20107599')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('https://tenor.com/view/its-you-pointing-you-sunglasses-gif-17739100')) {
    return await message.delete().then(message.member.timeout(60000) && message.channel.send(`@${message.author.id}> has been muted for a minute`));
  }

  if (message.content.toLowerCase().includes('656432172722290688')) {
    return await message.react('<:lipbite:926001179899609149');
  }

  if (message.content.toLowerCase().includes('santosh')) {
    return await message.react('<:skswhengrills:894437128140881970>');
  }

  const { prefix } = require('../config.json');
  const messageArray = message.content.split(' ');
  const cmd = messageArray[0];
  const args = messageArray.slice(1);
  const commands = Client.commands.get(cmd.slice(prefix.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));
  if (commands) commands.run(Client, message, args, prefix);
  if (!message.content.startsWith(prefix)) return;
});
