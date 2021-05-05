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
	if (!message.member.hasPermission('MANAGE_MESSAGES'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**You are Missing The Manage Messages Permission To Use This Command**',
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
			'Mention or Send The Id Of The Member You Want To Mute...'
		);
	let member =
		message.mentions.members.first() ||
		message.guild.members.cache.get(args[0]);
	if (!member) return message.channel.send('Invalid Member...');
	let muterole = GuildConfig?.Muterole;
	if (!message.guild.roles.cache.get(muterole))
		return message.channel.send(
			client
				.embed(
					{
						description: `**The MuteRole That Had Been Setup Earlier Is No Longer There(So I Cannot Remove The Mute Role From The Member). Please Setup Another One Using The Muterole Command.**`,
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
	if (!message.guild.me.hasPermission('MANAGE_ROLES'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**I am Missing The Manage Roles Permission To Perform This Command**',
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
	if (
		message.guild.roles.cache.get(muterole).position >
		message.guild.me.roles.highest.position
	)
		return message.channel.send(
			client
				.embed(
					{
						description: `**I Cannot Unmute People If The Mute Role is Higher Than My Own Role**`,
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
	if (!member.roles.cache.get(muterole))
		return message.channel.send(
			`\`${member.nickname || member.user.tag}\` is not Muted!`
		);
	member.roles.remove(muterole).then(() => {
		message.channel.send(
			client
				.embed(
					{
						title: 'Member Unmuted',
						description: `**\`${member.user.tag}\` Has Been Unmuted By \`${message.author.username}\`**`,
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
	});
};
exports.run = run;
exports.name = 'unmute';
exports.description = 'Allows Moderators To Unmute Muted Members';
exports.cooldown = 5000;
exports.category = 'Moderation';
exports.usage = `unmute <mention or id`;
//# sourceMappingURL=Unmute.js.map
