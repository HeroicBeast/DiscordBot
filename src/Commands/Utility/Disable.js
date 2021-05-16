'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	const GuildConfigSchema = await client.db.load('guildconfig');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: message.guild.id,
	});
	if (!message.member.hasPermission('MANAGE_GUILD'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**You are Missing The Manage Server Permission To Use This Command**',
						color: 'RANDOM',
					},
					message
				)
				.setTimestamp()
				.setFooter(
					message.author.username,
					message.author.displayAvatarURL({ dynamic: true, format: 'png' })
				)
		);
	if (!args.length)
		return message.channel.send(
			client
				.embed(
					{
						description: `**Please Send a Command Name or It's Alias To Disable It**`,
						color: 'RANDOM',
					},
					message
				)
				.setTimestamp()
				.setFooter(
					message.author.username,
					message.author.displayAvatarURL({ dynamic: true, format: 'png' })
				)
		);
	const cmd = args[0];
	const command =
		client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
	if (!command) return message.channel.send("That's **Not a Valid** Command");
	if (args[0].toLowerCase() == 'help')
		return message.channel.send('You Cannot Disable The **Help Command**');
	if (args[0].toLowerCase() == 'invite')
		return message.channel.send('You Cannot Disable The **Invite Command**');
	if (args[0].toLowerCase() == 'inv')
		return message.channel.send('You Cannot Disable The **Invite Command**');
	if (args[0].toLowerCase() == 'ping')
		return message.channel.send('You Cannot Disable The **Ping Command**');
	if (args[0].toLowerCase() == 'disable')
		return message.channel.send('You Cannot Disable The **Disable Command**');
	if (args[0].toLowerCase() == 'enable')
		return message.channel.send('You Cannot Disable The **Enable Command**');
	if (args[0].toLowerCase() == 'prefix')
		return message.channel.send('You Cannot Disable The **Prefix Command**');
	if (args[0].toLowerCase() == 'report')
		return message.channel.send('You Cannot Disable The **Report Command**');
	if (args[0].toLowerCase() == 'reload')
		return message.channel.send(
			'You Cannot Disable **Restricted Category** Commands'
		);
	if (args[0].toLowerCase() == 'image')
		return message.channel.send(
			'You Cannot Disable **Restricted Category** Commands'
		);
	if (args[0].toLowerCase() == 'shutdown')
		return message.channel.send(
			'You Cannot Disable **Restricted Category** Commands'
		);
	if (args[0].toLowerCase() == 'maintenance')
		return message.channel.send(
			'You Cannot Disable **Restricted Category** Commands'
		);
	if (args[0].toLowerCase() == 'eval')
		return message.channel.send(
			'You Cannot Disable **Restricted Category** Commands'
		);
	if (args[0].toLowerCase() == 'avatar') {
		if (GuildConfig?.Avatar == 'disabled') {
			return message.channel.send('The Command **Avatar** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Avatar: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Avatar** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'av') {
		if (GuildConfig?.Avatar == 'disabled') {
			return message.channel.send('The Command **Avatar** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Avatar: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Avatar** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'aww') {
		if (GuildConfig?.Aww == 'disabled') {
			return message.channel.send('The Command **Aww** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Aww: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Aww** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'meme') {
		if (GuildConfig?.Meme == 'disabled') {
			return message.channel.send('The Command **Meme** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Meme: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Meme** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'ad') {
		if (GuildConfig?.Ad == 'disabled') {
			return message.channel.send('The Command **Ad** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Ad: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Ad** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'affect') {
		if (GuildConfig?.Affect == 'disabled') {
			return message.channel.send('The Command **Affect** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Affect: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Affect** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'beautiful') {
		if (GuildConfig?.Beautiful == 'disabled') {
			return message.channel.send(
				'The Command **Beautiful** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Beautiful: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **Beautiful** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'bed') {
		if (GuildConfig?.Bed == 'disabled') {
			return message.channel.send('The Command **Bed** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Bed: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Bed** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'blink') {
		if (GuildConfig?.Blink == 'disabled') {
			return message.channel.send('The Command **Blink** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Blink: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Blink** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'blur') {
		if (GuildConfig?.Blur == 'disabled') {
			return message.channel.send('The Command **Blur** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Blur: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Blur** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'gay') {
		if (GuildConfig?.Gay == 'disabled') {
			return message.channel.send('The Command **Gay** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Gay: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Gay** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'grey') {
		if (GuildConfig?.Greyscale == 'disabled') {
			return message.channel.send('The Command **Grey** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Greyscale: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Grey** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'gray') {
		if (GuildConfig?.Greyscale == 'disabled') {
			return message.channel.send('The Command **Grey** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Greyscale: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Grey** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'invert') {
		if (GuildConfig?.Invert == 'disabled') {
			return message.channel.send('The Command **Invert** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Invert: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Invert** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'slap') {
		if (GuildConfig?.Slap == 'disabled') {
			return message.channel.send('The Command **Slap** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Slap: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Slap** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'spank') {
		if (GuildConfig?.Spank == 'disabled') {
			return message.channel.send('The Command **Spank** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Spank: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Spank** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'trigger') {
		if (GuildConfig?.Trigger == 'disabled') {
			return message.channel.send(
				'The Command **Trigger** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Trigger: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Trigger** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'netiquettes') {
		if (GuildConfig?.Netiquettes == 'disabled') {
			return message.channel.send(
				'The Command **Netiquettes** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Netiquettes: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **Netiquettes** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'internetrules') {
		if (GuildConfig?.Netiquettes == 'disabled') {
			return message.channel.send(
				'The Command **Netiquettes** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Netiquettes: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **Netiquettes** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'serverinfo') {
		if (GuildConfig?.Serverinfo == 'disabled') {
			return message.channel.send(
				'The Command **ServerInfo** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Serverinfo: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **ServerInfo** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'userinfo') {
		if (GuildConfig?.userinfp == 'disabled') {
			return message.channel.send(
				'The Command **UserInfo** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Userinfo: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **UserInfo** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'whois') {
		if (GuildConfig?.Userinfo == 'disabled') {
			return message.channel.send(
				'The Command **UserInfo** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Userinfo: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **Userinfo** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'ban') {
		if (GuildConfig?.Ban == 'disabled') {
			return message.channel.send('The Command **Ban** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Ban: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Ban** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'kick') {
		if (GuildConfig?.Kick == 'disabled') {
			return message.channel.send('The Command **Kick** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Kick: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Kick** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'Mute') {
		if (GuildConfig?.Mute == 'disabled') {
			return message.channel.send('The Command **Mute** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Mute: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Mute** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'muterole') {
		if (GuildConfig?.Muterolecmd == 'disabled') {
			return message.channel.send(
				'The Command **MuteRole** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Muterolecmd: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **MuteRole** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'purge') {
		if (GuildConfig?.Purge == 'disabled') {
			return message.channel.send('The Command **Purge** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Purge: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Purge** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'unban') {
		if (GuildConfig?.Unban == 'disabled') {
			return message.channel.send('The Command **Unban** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Unban: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Unban** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'unmute') {
		if (GuildConfig?.Unmute == 'disabled') {
			return message.channel.send('The Command **Unmute** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Unmute: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Unmute** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'confusedstonks') {
		if (GuildConfig?.Confusedstonks == 'disabled') {
			return message.channel.send(
				'The Command **ConfusedStonks** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Confusedstonks: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **ConfusedStonks** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'discordblack') {
		if (GuildConfig?.Discordblack == 'disabled') {
			return message.channel.send(
				'The Command **DiscordBlack** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Discordblack: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **DiscordBlack** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'discordblue') {
		if (GuildConfig?.Discordblue == 'disabled') {
			return message.channel.send(
				'The Command **DiscordBlue** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Discordblue: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **DiscordBlue** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'stonks') {
		if (GuildConfig?.Stonks == 'disabled') {
			return message.channel.send('The Command **Stonks** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Stonks: 'disabled' }
			).then(async () => {
				await message.channel.send(`The Command **Stonks** Has Been Disabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'doublestonks') {
		if (GuildConfig?.Doublestonks == 'disabled') {
			return message.channel.send(
				'The Command **DoubleStonks** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Doublestonks: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **DoubleStonks** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'dstonks') {
		if (GuildConfig?.Doublestonks == 'disabled') {
			return message.channel.send(
				'The Command **DoubleStonks** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Doublestonks: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **DoubleStonks** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'slowmode') {
		if (GuildConfig?.Slowmode == 'disabled') {
			return message.channel.send(
				'The Command **Slowmode** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Slowmode: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **Slowmode** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'sm') {
		if (GuildConfig?.Slowmode == 'disabled') {
			return message.channel.send(
				'The Command **Slowmode** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Slowmode: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **Slowmode** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'lockdown') {
		if (GuildConfig?.Lockdown == 'disabled') {
			return message.channel.send(
				'The Command **Lockdown** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Lockdown: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **Lockdown** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'ld') {
		if (GuildConfig?.Lockdown == 'disabled') {
			return message.channel.send(
				'The Command **Lockdown** Is Already Disabled'
			);
		} else {
			const msg = await message.channel.send('Disabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Lockdown: 'disabled' }
			).then(async () => {
				await message.channel.send(
					`The Command **Lockdown** Has Been Disabled`
				);
				msg.delete();
			});
		}
	}
};
exports.run = run;
exports.name = 'disable';
exports.category = 'Utility';
exports.cooldown = 5000;
exports.description = 'Disable a Command So It Cannot Be Used In The Server';
exports.usage = 'disable <command name>';
//# sourceMappingURL=Disable.js.map
