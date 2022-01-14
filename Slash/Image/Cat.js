/* eslint-disable linebreak-style */
/* eslint-disable no-return-await */
/* eslint-disable consistent-return */
const discord = require('discord.js');
const rp = require('random-puppy');

module.exports.run = async (inter) => {
  const subreddits = [
    'cat',
    'cats',
    'catpics',
    'kittens',
  ];
  const random = subreddits[Math.floor(Math.random() * subreddits.length)];
  const img = await rp(random);
  if (img.toLowerCase().includes('mp4')) {
    await inter.deferReply();
    return await inter.editReply(img);
  }
  const embed = new discord.MessageEmbed()
    .setAuthor(inter.member.user.username, inter.member.user.displayAvatarURL({ format: 'png', dynamic: true }))
    .setTimestamp()
    .setFooter('Sks is an idiot', inter.member.user.displayAvatarURL({ format: 'png', dynamic: true }))
    .setColor('RANDOM')
    .setDescription(`**[Click Here](${img})**`)
    .setImage(img);
  await inter.deferReply();
  await inter.editReply({ embeds: [embed] });
};

module.exports.help = {
  name: 'cat',
};
