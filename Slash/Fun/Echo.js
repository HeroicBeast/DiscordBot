/* eslint-disable linebreak-style */
/* eslint-disable no-return-await */
/* eslint-disable no-unused-vars */
module.exports.run = async (inter) => {
  const text = inter.options.getString('text');
  return await inter.reply({ content: text, ephemeral: true });
};

module.exports.help = {
  name: 'echo',
};
