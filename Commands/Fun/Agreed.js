/* eslint-disable linebreak-style */
module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  message.channel.send(`I agree with <@${message.author.id}>`);
  message.channel.send('https://tenor.com/view/true-true-true-i-agree-agreement-agreed-gif-23733447');
};

module.exports.help = {
  name: 'agreed',
  aliases: [],
};
