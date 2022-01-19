/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-await */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable consistent-return */
/* eslint-disable no-cond-assign */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
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
require('./mongo')();

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
      Client.on('ready', () => {
        Client.channels.cache.get('932941302163734539').send(`\\✅ [Slash] ${file}`);
      });
      try {
        Client.SlashCmds.set(fileGet.help.name, fileGet);
      } catch (error) {
        return console.log(error);
      }
    });
  });
});

// Command
fs.readdirSync('./Commands/').forEach((dir) => {
  fs.readdir(`./Commands/${dir}`, (err, files) => {
    if (err) throw err;

    const jsFiles = files.filter((f) => f.split('.').pop() === 'js');
    if (jsFiles.length <= 0) {
      console.log("❌ Can't find any commands!");
      return;
    }

    jsFiles.forEach((file) => {
      const fileGet = require(`./Commands/${dir}/${file}`);

      console.log(`✅ ${file}`);
      Client.on('ready', () => {
        Client.channels.cache.get('932941302163734539').send(`\\✅ ${file}`);
      });
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

// Message Edit
Client.on('messageUpdate', async (oldMessage, newMessage) => {
  if (newMessage.author.bot || newMessage.channel.type === 'DM') return;
  if (newMessage.guild.id !== '781932135631028244') return;
  if (newMessage.content.toLowerCase().includes('doraemon')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`<@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('suneo')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`<@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('shinchan')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`<@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('shin-chan')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`<@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('niggi')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`<@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('nigga')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`<@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('hittori')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`<@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('potty')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`<@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('https://api.creavite.co/out/f139cc60-94bb-4da0-a173-d75c62c83f57_standard.gif')) {
    return await newMessage.delete().then(newMessage.member.timeout(120000) && newMessage.channel.send(`<@${newMessage.author.id}> has been muted for 2 minutes`));
  }
  if (newMessage.content.toLowerCase().includes('https://cdn.discordapp.com/attachments/851325180524888095/930504487523745792/video-output-C71AD518-35E3-44BE-840E-A07F4BFAE976.mp4')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`<@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('https://cdn.discordapp.com/attachments/766235212908462100/930401221011984434/cachedVideo.mp4')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('https://tenor.com/view/freaksandgeeks-blizzard-gif-20107599')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('https://tenor.com/view/its-you-pointing-you-sunglasses-gif-17739100')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`@${newMessage.author.id}> has been muted for a minute`));
  }
  if (newMessage.content.toLowerCase().includes('https://tenor.com/view/anus-funny-anal-gay-ajith-gif-13400206')) {
    return await newMessage.delete().then(newMessage.member.timeout(60000) && newMessage.channel.send(`@${newMessage.author.id}> has been muted for a minute`));
  }
});

// Message Delete
Client.on('messageDelete', async msg => {
  let o = msg.content;
  if (o.length > 1500) o = 'Content to long to display';
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${msg.author.tag}`, msg.author.displayAvatarURL({ format: 'png', dynamic: true }))
    .setTitle(`Message deleted in #${msg.channel.name}`)
    .setColor('RED')
    .setDescription(msg.content || 'No Content')
    .setFooter('Sks is an idiot', msg.author.displayAvatarURL({ format: 'png', dynamic: true }))
    .setTimestamp();
  Client.channels.cache.get('932941302163734539').send({ embeds: [embed] });
});

// Logs Message Update
Client.on('messageUpdate', async (oldMsg, newMsg) => {
  let o = oldMsg.content;
  if (o.length > 1500) o = 'Content to long to display';
  let a = newMsg.content;
  if (a.length > 1500) a = 'Content to long to display';
  if (oldMsg.author.bot) return;
  if (oldMsg.content = newMsg.content) return;
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${oldMsg.author.tag}`, oldMsg.author.displayAvatarURL({ format: 'png', dynamic: true }))
    .setTitle(`Message edited in #${oldMsg.channel.name}`)
    .setColor('GREEN')
    .setDescription(`**Before:** ${oldMsg.content}\n**After:** ${newMsg.content}`)
    .setFooter('Sks is an idiot', newMsg.author.displayAvatarURL({ format: 'png', dynamic: true }))
    .setTimestamp();
  Client.channels.cache.get('932941302163734539').send({ embeds: [embed] });
});

// Login
Client.login(token);
