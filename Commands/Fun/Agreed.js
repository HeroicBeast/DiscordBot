/* eslint-disable linebreak-style */
module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  let user = message.author;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (Client.guilds.cache.get('781932135631028244').members.cache.get(args[0])) {
    user = Client.guilds.cache.get('781932135631028244').members.cache.get(args[0]).user;
  }
  message.channel.send(`I agree with <@${user.id}>`);
  message.channel.send('https://tenor.com/view/true-true-true-i-agree-agreement-agreed-gif-23733447');
};

module.exports.help = {
  name: 'agreed',
  aliases: [],
};
