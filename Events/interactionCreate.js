/* eslint-disable linebreak-style */
/* eslint-disable no-useless-return */
/* eslint-disable linebreak-style */
const { Client } = require('../index');

Client.on('interactionCreate', async (inter) => {
  if (inter.isCommand()) {
    const slashCmds = Client.SlashCmds.get(inter.commandName);
    if (inter.member.permissions.has(slashCmds.help.permission)) return;
    if (slashCmds) slashCmds.run(inter);
  }
});
