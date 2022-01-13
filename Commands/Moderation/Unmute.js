/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.member.permissions.has('MANAGE_MESSAGES')) {
    return;
  }

  // eslint-disable-next-line eqeqeq
  if (!args.length == 1) {
    return message.reply('You must mention a member you want to un-timeout');
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

  memb
    .timeout(0)
    .then(message.reply(`<@${memb.user.id}> has been un-timedout.`));
};

module.exports.help = {
  name: 'unmute',
  aliases: ['untimeout'],
};
