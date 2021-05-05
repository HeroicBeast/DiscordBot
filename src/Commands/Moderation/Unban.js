'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	if (!message.member.hasPermission('BAN_MEMBERS'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**You are Missing The Ban Members Permission To Use This Command**',
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
	if (!args[0])
		return message.channel.send(
			'Mention a Member or Send Their ID to Ban Them From The Server.'
		);
	let bans = await message.guild.fetchBans();
	const member = bans.get(args[0]);
	if (!member)
		return message.channel.send(
			'That User Is Not Banned! Please Send The Id Of The User That is Banned...'
		);
	let banneduser = '';
	if (member.user.id) banneduser = member.user.id;
	if (!message.guild.me.hasPermission('BAN_MEMBERS'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**I am Missing The Ban Members Permission To Perform This Command**',
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
	await message.guild.members.unban(banneduser).then(() => {
		message.channel.send(
			client
				.embed(
					{
						description: `**\`${member.user.tag}\` Has Been Unbanned By \`${
							message.author.username
						}\`. They Were Banned For The Reason: \`${
							member.reason || 'No Reason Provided'
						}\`**`,
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
exports.name = 'unban';
exports.category = 'Moderation';
exports.cooldown = 3000;
exports.description = `Unban a Member From The Server`;
exports.usage = `unban <id>`;
//# sourceMappingURL=Unban.js.map
