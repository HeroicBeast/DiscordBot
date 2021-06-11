'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.name = exports.run = void 0;
const ms_1 = __importDefault(require('ms'));
const run = async (client, message) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	const GuildConfigSchema = await client.db.load('guildconfig');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: message.guild.id,
	});
	const DevSchema = await client.db.load('dev');
	const dev = await DevSchema.findOne({
		ID: `656432172722290688`,
	});
	let prefix = '+';
	if (GuildConfig?.Prefix) {
		prefix = GuildConfig.Prefix;
	}
	if (
		message.content.toLowerCase() == '-verify' &&
		message.guild.id == '843782285081706546' &&
		message.channel.id == '843783312979787796'
	) {
		if (message.member.roles.cache.has(`848505717300396042`)) {
			message.member.roles.add(`843782285081706549`) &&
				message.member.roles.remove(`848505717300396042`) &&
				message.delete;
		} else message.delete;
	}
	if (message.content.startsWith(`<@!${client.user.id}>`))
		return message.channel.send(
			client.embed(
				{
					color: '#30D5C8',
					description: `**Hey There! I am Nexus...\nTo get help on all my commands do ${
						GuildConfig?.Prefix || '+'
					}help**`,
				},
				message
			)
		);
	if (
		message.author.bot ||
		!message.guild ||
		!message.content.startsWith(prefix)
	)
		return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
	const command =
		client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
	if (!command) return;
	if (command.name == 'avatar') {
		if (GuildConfig?.Avatar == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'aww') {
		if (GuildConfig?.Aww == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'meme') {
		if (GuildConfig?.Meme == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'ad') {
		if (GuildConfig?.Ad == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'affect') {
		if (GuildConfig?.Affect == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'beautiful') {
		if (GuildConfig?.Beautiful == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'bed') {
		if (GuildConfig?.Bed == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'blur') {
		if (GuildConfig?.Blur == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'gay') {
		if (GuildConfig?.Gay == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'grey') {
		if (GuildConfig?.Greyscale == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'invert') {
		if (GuildConfig?.Invert == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'slap') {
		if (GuildConfig?.Slap == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'spank') {
		if (GuildConfig?.Spank == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'trigger') {
		if (GuildConfig?.Trigger == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'netiquettes') {
		if (GuildConfig?.Netiquettes == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'serverinfo') {
		if (GuildConfig?.Serverinfo == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'userinfo') {
		if (GuildConfig?.Userinfo == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'ban') {
		if (GuildConfig?.Ban == 'disabled') {
			return await message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'kick') {
		if (GuildConfig?.Kick == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'mute') {
		if (GuildConfig?.Mute == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'muterole') {
		if (GuildConfig?.Muterolecmd == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'purge') {
		if (GuildConfig?.Purge == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'unban') {
		if (GuildConfig?.Unban == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'unmute') {
		if (GuildConfig?.Unmute == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'confusedstonks') {
		if (GuildConfig?.Confusedstonks == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'discordblack') {
		if (GuildConfig?.Discordblack == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'discordblue') {
		if (GuildConfig?.Discordblue == 'disabled') {
			return message.channel.send('This Command Is Disabled');
		}
	}
	if (command.name == 'doublestonks') {
		if (GuildConfig?.Doublestonks == 'disabled') {
			return message.channel.send(`This Command Is Disabled`);
		}
	}
	if (command.name == 'stonks') {
		if (GuildConfig?.Stonks == 'disabled') {
			return message.channel.send(`This Command is Disabled`);
		}
	}
	if (command.name == 'slowmode') {
		if (GuildConfig?.Slowmode == 'disabled') {
			return message.channel.send(`This Command is Disabled`);
		}
	}
	if (command.name == 'lockdown') {
		if (GuildConfig?.Lockdown == 'disabled') {
			return message.channel.send(`This Command is Disabled`);
		}
	}
	if (client.cooldowns.has(`${message.author.id}-${command.name}`))
		return await message.channel
			.send(
				client
					.embed(
						{
							title: 'Hey Bud Slow Down',
							description: `You Can Use This Command Again In ${ms_1.default(
								client.cooldowns.get(`${message.author.id}-${command.name}`) -
									Date.now(),
								{ long: true }
							)}\n\nSmall Tip - *Just Use The Command After This Message Deletes.*`,
							color: 'RED',
						},
						message
					)
					.setFooter(
						message.author.username,
						message.author.displayAvatarURL({ format: 'png', dynamic: true })
					)
					.setTimestamp()
			)
			.then((msg) =>
				msg.delete({
					timeout:
						client.cooldowns.get(`${message.author.id}-${command.name}`) -
						Date.now(),
				})
			);
	if (dev?.Maintenance == 'true') {
		return message.channel.send(
			client
				.embed(
					{
						title: 'Maintenance Mode Is Turned On',
						description: `**You Cannot Use Commands While It Has Been Turned On. Please Check The [Support Server](https://dsc.gg/nexussuport) For Bot Outages And Updates.**`,
						color: 'RANDOM',
					},
					message
				)
				.setFooter(
					message.author.username,
					message.author.displayAvatarURL({ format: 'png', dynamic: true })
				)
				.setTimestamp()
		);
	} else {
		command.run(client, message, args).catch((reason) =>
			message.channel
				.send(
					client.embed(
						{
							description: `${reason}\n [Click Here](https://dsc.gg/nexussuport) To Join The Support Server`,
							title: `An Error Occured While Running This Command.`,
							color: 'RED',
						},
						message
					)
				)
				.then(() => {
					console.log(reason);
					let channel = client.channels.cache.get(`832129461905391646`);
					channel.send(
						`Guild Id: \`${message.guild.id}\`\nGuild Name: \`${
							message.guild.name
						}\`\nCommand: \`${command.name.toUpperCase()}\`\nUser Id: \`${
							message.author.id
						}\`\nUser Tag: \`${
							message.author.tag
						}\`\nError:\n\`${reason}\`\n...`
					);
				})
		);
	}
	client.cooldowns.set(
		`${message.author.id}-${command.name}`,
		Date.now() + command.cooldown
	);
	setTimeout(() => {
		client.cooldowns.delete(`${message.author.id}-${command.name}`);
	}, command.cooldown);
};
exports.run = run;
exports.name = 'message';
//# sourceMappingURL=Message%20Event.js.map
