/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  message.channel.send('Pinging...').then((m) => {
    m.edit(`Message Latency is **${m.createdTimestamp - message.createdTimestamp}ms** and API Latency is **${Math.round(Client.ws.ping)}ms**`);
  });
};

module.exports.help = {
  name: 'ping',
  aliases: ['pong'],
};