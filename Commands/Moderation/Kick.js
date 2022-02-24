/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.member.permissions.has('MANAGE_MESSAGES')) {
    return;
  }
  if (!message.mentions.members.first()) {
    return message.reply('Mention a user');
  }

  if (message.mentions.members.first().permissions.has('ADMINISTRATOR')) {
    return message.reply('No kicking admins');
  }

  message.mentions.members.first().user.send('You have been kicked from Beast SMP because yes').catch(() => message.channel.send('Could not send a dm'));
  message.mentions.members.first().kick('Because yes').then(message.reply('User has been kicked'));
};

module.exports.help = {
  name: 'kick',
  aliases: [],
};
