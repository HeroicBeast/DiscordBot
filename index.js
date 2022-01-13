/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable consistent-return */
/* eslint-disable no-cond-assign */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable linebreak-style */
const Discord = require('discord.js');

const fs = require('fs');
const { token } = require('./config.json');

const Client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
});

// Collections
Client.commands = new Discord.Collection();
Client.aliases = new Discord.Collection();
Client.events = new Discord.Collection();
Client.SlashCmds = new Discord.Collection();

module.exports.Client = Client;

// Event
// eslint-disable-next-line arrow-parens
fs.readdirSync('./Events/').forEach(file => {
  // eslint-disable-next-line arrow-parens
  // eslint-disable-next-line no-var
  var jsFiles = fs.readdirSync('./Events/').filter(f => f.split('.').pop() === 'js');
  if (jsFiles.length <= 0) return console.log('❌ No events');
  let check = false;

  jsFiles.forEach(event => {
    const eventGet = require(`./Events/${event}`);
    try {
      Client.events.set(eventGet.name, eventGet);
      if (check = false) {
        console.log(`✅${event}`);
        check == true;
      }
    } catch (err) {
      return console.log(err);
    }
  });
});

// SlashCommand
fs.readdirSync('./Slash/').forEach((dir) => {
  fs.readdir(`./Slash/${dir}`, (err, files) => {
    if (err) throw err;

    const jsFiles = files.filter((f) => f.split('.').pop() === 'js');
    if (jsFiles.length <= 0) {
      console.log("❌[Slash] Can't find any commands!");
      return;
    }

    jsFiles.forEach((file) => {
      const fileGet = require(`./Slash/${dir}/${file}`);

      console.log(`✅ [Slash] ${file}`);
      try {
        Client.SlashCmds.set(fileGet.help.name, fileGet);
      } catch (error) {
        return console.log(error);
      }
    });
  });
});

// Command
fs.readdirSync('./commands/').forEach((dir) => {
  fs.readdir(`./commands/${dir}`, (err, files) => {
    if (err) throw err;

    const jsFiles = files.filter((f) => f.split('.').pop() === 'js');
    if (jsFiles.length <= 0) {
      console.log("❌ Can't find any commands!");
      return;
    }

    jsFiles.forEach((file) => {
      const fileGet = require(`./commands/${dir}/${file}`);

      console.log(`✅ ${file}`);
      try {
        Client.commands.set(fileGet.help.name, fileGet);
        fileGet.help.aliases.forEach((alias) => {
          Client.aliases.set(alias, fileGet.help.name);
        });
      } catch (error) {
        return console.log(error);
      }
    });
  });
});

// Login
Client.login(token);
