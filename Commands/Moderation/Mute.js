/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
const ms = require('ms');

module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.member.permissions.has('MANAGE_MESSAGES')) {
    return;
  }

  if (!args.length == 1) {
    return message.reply('You must mention the member you want to timeout');
  }

  if (!message.mentions.members.first()) {
    return message.reply('You must mention a member');
  }

  const memb = Client.guilds.cache
    .get('781932135631028244')
    .members.cache.get(message.mentions.users.first().id);
  if (!memb) {
    return message.reply('Invalid Member');
  }

  if (memb.permissions.has('ADMINISTRATOR')) {
    return message.reply('No timing out Admins');
  }

  if (!args[1]) {
    return message.reply('You must specify a time duration');
  }

  if (!args[1].toLowerCase().includes('s') || !ms(args[1])) {
    return message.reply(
      'Time in seconds only pls. Use -min to convert minutes to seconds.',
    );
  }

  memb
    .timeout(ms(args[1]))
    .then(
      message.reply(
        `${memb.user.username} has been timed out for **${ms(ms(args[1]))}**`,
      ),
    );
};

module.exports.help = {
  name: 'mute',
  aliases: ['timeout'],
};
