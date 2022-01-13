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

  ch.permissionOverwrites.edit(message.guild.roles.everyone, { SEND_MESSAGES: false }).then(ch.send(`Locked <#${ch.id}>`));
  message.channel.messages.fetch({ limit: 1 }).then((messages) => messages.last().react('🔐'));
};

module.exports.help = {
  name: 'lock',
  aliases: ['l'],
};
