/* eslint-disable linebreak-style */
/* eslint-disable no-return-await */
/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
module.exports.run = async (inter) => {
  const e = inter.options.getNumber('minutes');
  await inter.reply({ content: `${e} minutes will be **${e * 60}** Seconds`, ephemeral: true });
};

module.exports.help = {
  name: 'min',
};
