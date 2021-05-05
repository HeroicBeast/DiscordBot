'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.category = exports.cooldown = exports.description = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	const GuildConfigSchema = await client.db.load('guildconfig');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: message.guild.id,
	});
	if (!message.member.hasPermission('MANAGE_CHANNELS'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**You are Missing The Manage Channels Permission To Use This Command**',
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
	let ifrole = GuildConfig?.Muterole;
	let ifrole2 = `<@&${ifrole}>`;
	if (ifrole2.toLowerCase().includes('undefined'))
		ifrole2 = 'No Mute Role Setup';
	if (!args.length)
		return message.channel.send(
			client
				.embed(
					{
						description: `**Mute Role For This Server: ${ifrole2}**\n\n**To Setup a MuteRole, Mention The Role or Send It's ID**`,
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
	let role =
		message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
	if (!role) return message.channel.send('Invalid Role...');
	const msg = await message.channel.send('Updating The Muterole...');
	await GuildConfigSchema.update(
		{ Guild: message.guild.id },
		{ Muterole: role.id }
	).then(() => {
		msg.delete({ timeout: 1000 });
	});
	message.channel.send(
		client
			.embed(
				{
					description: `**The Muterole For This Server Has Been Updated To** <@&${role.id}>`,
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
exports.name = 'muterole';
exports.description = 'Sets up a Muterole For The Mute Command';
exports.cooldown = 5000;
exports.category = 'Moderation';
exports.usage = `muterole <mention or id>`;
//# sourceMappingURL=Muterole.js.map
