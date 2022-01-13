/* eslint-disable linebreak-style */
module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.member.permissions.has('MANAGE_MESSAGES')) {
    return;
  }
  let ch = message.channel;
  if (message.mentions.channels.first()) {
    ch = message.mentions.channels.first();
  }

  ch.permissionOverwrites.edit(message.guild.roles.everyone, { SEND_MESSAGES: null }).then(ch.send(`Unlocked <#${ch.id}>`));
  message.channel.messages.fetch({ limit: 1 }).then((messages) => messages.last().react('<:love:834675763822985226>'));
};

module.exports.help = {
  name: 'unlock',
  aliases: ['ul'],
};
