/* eslint-disable linebreak-style */
const discord = require('discord.js');

module.exports.run = async (inter) => {
  let { user } = inter.member;
  if (inter.options.getUser('user')) {
    user = inter.options.getUser('user');
  }
  const embed = new discord.MessageEmbed()
    .setColor('#fcc4db')
    .setFooter(
      'Sks is an idiot',
      inter.member.user.displayAvatarURL({ dynamic: true, format: 'png' }),
    )
    .setTimestamp()
    .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 256 }));
  await inter.deferReply();
  await inter.editReply({ embeds: [embed] });
};

module.exports.help = {
  name: 'avatar',
};
