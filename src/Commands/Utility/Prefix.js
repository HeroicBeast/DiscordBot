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
						description: `**The Prefix For This Server is ${
							GuildConfig?.Prefix || `+`
						}**`,
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
	if (args[0].length > 5)
		return message.channel.send(
			client
				.embed(
					{
						description: `**You Can't Set A Prefix That Has More Than 5 Characters**`,
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
	const msg = await message.channel.send('Updating The Prefix...');
	await GuildConfigSchema.update(
		{ Guild: message.guild.id },
		{ Prefix: args[0].toLowerCase() }
	).then(() => msg.delete());
	message.channel.send(
		client
			.embed(
				{
					description: `**The Prefix Has Been Updated To ${args[0].toLowerCase()}**`,
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
};
exports.run = run;
exports.name = 'prefix';
exports.category = 'Utility';
exports.cooldown = 5000;
exports.description = 'Set or Change the custom prefix of the Server';
exports.usage = `prefix <new prefix>`;
//# sourceMappingURL=Prefix.js.map
