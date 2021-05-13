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
	let prefix = GuildConfig?.Prefix || '+';
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
		return message.channel.send('You Cannot Enable The **Help Command**');
	if (args[0].toLowerCase() == 'invite')
		return message.channel.send('You Cannot Enable The **Invite Command**');
	if (args[0].toLowerCase() == 'inv')
		return message.channel.send('You Cannot Enable The **Invite Command**');
	if (args[0].toLowerCase() == 'ping')
		return message.channel.send('You Cannot Enable The **Ping Command**');
	if (args[0].toLowerCase() == 'disable')
		return message.channel.send('You Cannot Enable The **Disable Command**');
	if (args[0].toLowerCase() == 'enable')
		return message.channel.send('You Cannot Enable The **Enable Command**');
	if (args[0].toLowerCase() == 'prefix')
		return message.channel.send('You Cannot Enable The **Prefix Command**');
	if (args[0].toLowerCase() == 'report')
		return message.channel.send('You Cannot Enable The **Report Command**');
	if (args[0].toLowerCase() == 'reload')
		return message.channel.send(
			'You Cannot Enable **Restricted Category** Commands'
		);
	if (args[0].toLowerCase() == 'image')
		return message.channel.send(
			'You Cannot Enable **Restricted Category** Commands'
		);
	if (args[0].toLowerCase() == 'shutdown')
		return message.channel.send(
			'You Cannot Enable **Restricted Category** Commands'
		);
	if (args[0].toLowerCase() == 'maintenance')
		return message.channel.send(
			'You Cannot Enable **Restricted Category** Commands'
		);
	if (args[0].toLowerCase() == 'eval')
		return message.channel.send(
			'You Cannot Enable **Restricted Category** Commands'
		);
	if (args[0].toLowerCase() == 'avatar') {
		if (GuildConfig?.Avatar == 'enabled') {
			return message.channel.send('The Command **Avatar** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Avatar: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Avatar** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'av') {
		if (GuildConfig?.Avatar == 'enabled') {
			return message.channel.send('The Command **Avatar** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Avatar: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Avatar** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'aww') {
		if (GuildConfig?.Aww == 'enabled') {
			return message.channel.send('The Command **Aww** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Aww: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Aww** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'meme') {
		if (GuildConfig?.Meme == 'enabled') {
			return message.channel.send('The Command **Meme** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Meme: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Meme** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'ad') {
		if (GuildConfig?.Ad == 'enabled') {
			return message.channel.send('The Command **Ad** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Ad: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Ad** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'affect') {
		if (GuildConfig?.Affect == 'enabled') {
			return message.channel.send('The Command **Affect** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Affect: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Affect** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'beautiful') {
		if (GuildConfig?.Beautiful == 'enabled') {
			return message.channel.send(
				'The Command **Beautiful** Is Already Enabled'
			);
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Beautiful: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Beautiful** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'bed') {
		if (GuildConfig?.Bed == 'enabled') {
			return message.channel.send('The Command **Bed** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Bed: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Bed** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'blink') {
		if (GuildConfig?.Blink == 'enabled') {
			return message.channel.send('The Command **Blink** Is Already Disabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Blink: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Blink** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'blur') {
		if (GuildConfig?.Blur == 'enabled') {
			return message.channel.send('The Command **Blur** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Blur: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Blur** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'gay') {
		if (GuildConfig?.Gay == 'enabled') {
			return message.channel.send('The Command **Gay** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Gay: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Gay** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'grey') {
		if (GuildConfig?.Greyscale == 'enabled') {
			return message.channel.send('The Command **Grey** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Greyscale: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Grey** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'gray') {
		if (GuildConfig?.Greyscale == 'enabled') {
			return message.channel.send('The Command **Grey** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Greyscale: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Grey** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'invert') {
		if (GuildConfig?.Invert == 'enabled') {
			return message.channel.send('The Command **Invert** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Invert: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Invert** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'slap') {
		if (GuildConfig?.Slap == 'enabled') {
			return message.channel.send('The Command **Slap** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Slap: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Slap** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'spank') {
		if (GuildConfig?.Spank == 'enabled') {
			return message.channel.send('The Command **Spank** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Spank: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Spank** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'trigger') {
		if (GuildConfig?.Trigger == 'enabled') {
			return message.channel.send('The Command **Trigger** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Trigger: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Trigger** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'netiquettes') {
		if (GuildConfig?.Netiquettes == 'enabled') {
			return message.channel.send(
				'The Command **Netiquettes** Is Already Enabled'
			);
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Netiquettes: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Netiquettes** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'internetrules') {
		if (GuildConfig?.Netiquettes == 'enabled') {
			return message.channel.send(
				'The Command **Netiquettes** Is Already Enabled'
			);
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Netiquettes: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Netiquettes** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'serverinfo') {
		if (GuildConfig?.Serverinfo == 'enabled') {
			return message.channel.send(
				'The Command **ServerInfo** Is Already Enabled'
			);
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Serverinfo: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **ServerInfo** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'userinfo') {
		if (GuildConfig?.userinfp == 'enabled') {
			return message.channel.send(
				'The Command **UserInfo** Is Already Enabled'
			);
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Userinfo: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **UserInfo** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'whois') {
		if (GuildConfig?.Userinfo == 'enabled') {
			return message.channel.send(
				'The Command **UserInfo** Is Already Enabled'
			);
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Userinfo: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Userinfo** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'ban') {
		if (GuildConfig?.Ban == 'enabled') {
			return message.channel.send('The Command **Ban** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Ban: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Ban** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'kick') {
		if (GuildConfig?.Kick == 'enabled') {
			return message.channel.send('The Command **Kick** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Kick: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Kick** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'Mute') {
		if (GuildConfig?.Mute == 'enabled') {
			return message.channel.send('The Command **Mute** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Mute: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Mute** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'muterole') {
		if (GuildConfig?.Muterolecmd == 'enabled') {
			return message.channel.send(
				'The Command **MuteRole** Is Already Enabled'
			);
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Muterolecmd: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **MuteRole** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'purge') {
		if (GuildConfig?.Purge == 'enabled') {
			return message.channel.send('The Command **Purge** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Purge: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Purge** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'unban') {
		if (GuildConfig?.Unban == 'enabled') {
			return message.channel.send('The Command **Unban** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Unban: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Unban** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'unmute') {
		if (GuildConfig?.Unmute == 'enabled') {
			return message.channel.send('The Command **Unmute** Is Already Enabled');
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Unmute: 'enabled' }
			).then(() => {
				return message.channel
					.send(`The Command **Unmute** Has Been Enabled`)
					.then(() => {
						msg.delete();
					});
			});
		}
	}
	if (args[0].toLowerCase() == 'slowmode') {
		if (GuildConfig?.Slowmode == 'enabled') {
			return message.channel.send(
				'The Command **Slowmode** Is Already Enabled'
			);
		} else {
			const msg = await message.channel.send('Enabled The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Slowmode: 'enabled' }
			).then(async () => {
				await message.channel.send(`The Command **Slowmode** Has Been Enabled`);
				msg.delete();
			});
		}
	}
	if (args[0].toLowerCase() == 'sm') {
		if (GuildConfig?.Slowmode == 'enabled') {
			return message.channel.send(
				'The Command **Slowmode** Is Already Enabled'
			);
		} else {
			const msg = await message.channel.send('Enabling The Command...');
			await GuildConfigSchema.update(
				{ Guild: message.guild.id },
				{ Slowmode: 'enabled' }
			).then(async () => {
				await message.channel.send(`The Command **Slowmode** Has Been Enabled`);
				msg.delete();
			});
		}
	}
};
exports.run = run;
exports.name = 'enable';
exports.category = 'Utility';
exports.cooldown = 5000;
exports.description =
	'Enable a Disabled Command So It Can Be Used In The Server';
exports.usage = 'enable <command name>';
//# sourceMappingURL=Enable.js.map
