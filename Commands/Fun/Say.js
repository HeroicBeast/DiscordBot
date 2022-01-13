/* eslint-disable linebreak-style */
/* eslint-disable no-return-await */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.id != '656432172722290688') {
    return await message.delete();
  }

  if (!args[0]) {
    return await message.delete();
  }

  await message.delete().then(message.channel.send(args.join(' ')));
};

module.exports.help = {
  name: 'say',
  aliases: [],
};
