'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	if (!message.member.hasPermission('KICK_MEMBERS'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**You are Missing The Kick Members Permission To Use This Command**',
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
			'Mention a Member or Send Their ID to Kick Them From The Server.'
		);
	const member =
		message.mentions.members.first() ||
		message.guild.members.cache.get(args[0]);
	if (!member) return message.channel.send('Please Send a Valid Member');
	if (!message.guild.me.hasPermission('KICK_MEMBERS'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**I am Missing The Kick Members Permission To Perform This Command**',
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
	if (!member.kickable)
		return message.channel.send(
			client
				.embed(
					{
						description: `I Cannot Kick \`${member.user.tag}\`. Please Check If They have a Higher Role Than Me.`,
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
	let reason = 'lol';
	if (!args[1]) reason = 'No Reason Provided';
	if (args[1]) reason = args.join(' ').slice(args[0].length);
	try {
		message.channel.send(
			client.embed(
				{
					description: `**\`${member.user.tag}\` Has Been Kicked By \`${message.author.username}\` for the Reason: \`${reason}\`**`,
					color: 'RANDOM',
				},
				message
			)
		);
		member.kick(reason);
	} catch (e) {
		if (e instanceof Error)
			return message.channel.send(
				`Couldn't Kick \`${member.user.tag}\` because of an Error.\n\`${e.message}\``
			);
	}
};
exports.run = run;
exports.name = 'kick';
exports.category = 'Moderation';
exports.cooldown = 5000;
exports.description = `Kick a Member From The Server`;
exports.usage = `kick <mention or id>`;
//# sourceMappingURL=Kick.js.map
