/* eslint-disable linebreak-style */
const discord = require('discord.js');

module.exports.run = async (inter) => {
  const version = inter.guild.channels.cache.get('782883517503373332');
  const ip = inter.guild.channels.cache.get('782220883674267659');
  const embed = new discord.MessageEmbed()
    .setColor('#fcc4db')
    .setFooter(
      'Sks is an idiot',
      inter.member.user.displayAvatarURL({ dynamic: true, format: 'png' }),
    )
    .setTimestamp()
    .setAuthor(
      'Minecraft Server Info',
      inter.guild.members.cache
        .get('656432172722290688')
        .displayAvatarURL({ format: 'png', dynamic: true }),
    )
    .addFields({
      name: 'Server ip',
      value: `${ip}`,
      inline: true,
    }, {
      name: 'Version',
      value: `${version}`,
      inline: true,
    });
  await inter.reply({ embeds: [embed], ephemeral: true });
};

module.exports.help = {
  name: 'ip',
};
