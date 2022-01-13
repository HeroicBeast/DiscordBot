/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
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

  await message.delete().then(message.channel.bulkDelete(args[0]));
};

module.exports.help = {
  name: 'purge',
  aliases: ['clear'],
};
