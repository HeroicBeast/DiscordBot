/* eslint-disable linebreak-style */
/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
const ms = require('ms');

module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.member.permissions.has('MANAGE_MESSAGES')) {
    return;
  }
  if (!args.length == 1) {
    return message.reply('Send a number of messages to purge');
  }

  if (isNaN(args[0])) {
    return message.reply('Send a **number** of messages to purge');
  }

  if (parseInt(args[0]) > 100 || parseInt(args[0]) < 1) return message.reply('The number of messages to purge should be above 0 and below 100');
  await message.delete();
  const messages = await message.channel.messages.fetch({
    limit: parseInt(args[0]),
  });
  const usable = messages.filter((m) => (m.createdTimestamp - Date.now()) < ms('14d') && !m.pinned);
  await message.channel.bulkDelete(usable).catch(() => message.channel.send('An error occured'));
};

module.exports.help = {
  name: 'pog',
  aliases: ['clear'],
};
