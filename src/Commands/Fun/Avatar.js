'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.aliases = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	if (!args[0])
		return message.channel.send(
			client
				.embed(
					{
						color: 'RANDOM',
					},
					message
				)
				.setFooter(
					message.author.username,
					message.author.displayAvatarURL({ dynamic: true, format: 'png' })
				)
				.setTimestamp()
				.setAuthor(
					`${message.author.username}'s Avatar`,
					message.author.displayAvatarURL({ dynamic: true, format: 'png' })
				)
				.setImage(
					`${message.author.displayAvatarURL({
						format: 'png',
						dynamic: true,
					})}?size=256`
				)
		);
	const member =
		message.mentions.members.first() ||
		message.guild.members.cache.get(args[0]);
	if (!member)
		return message.channel.send(
			client
				.embed(
					{
						color: 'RANDOM',
					},
					message
				)
				.setFooter(
					message.author.username,
					message.author.displayAvatarURL({ dynamic: true, format: 'png' })
				)
				.setTimestamp()
				.setAuthor(
					`${message.author.username}'s Avatar`,
					message.author.displayAvatarURL({ dynamic: true, format: 'png' })
				)
				.setImage(
					`${message.author.displayAvatarURL({
						format: 'png',
						dynamic: true,
					})}?size=256`
				)
		);
	message.channel.send(
		client
			.embed(
				{
					color: 'RANDOM',
				},
				message
			)
			.setFooter(
				message.author.username,
				message.author.displayAvatarURL({ dynamic: true, format: 'png' })
			)
			.setTimestamp()
			.setAuthor(
				`${member.user.username}'s Avatar`,
				member.user.displayAvatarURL({ dynamic: true, format: 'png' })
			)
			.setImage(
				`${member.user.displayAvatarURL({
					format: 'png',
					dynamic: true,
				})}?size=256`
			)
	);
};
exports.run = run;
exports.name = 'avatar';
exports.aliases = ['av'];
exports.category = 'Fun';
exports.cooldown = 5000;
exports.description = `Get a Member's Avatar`;
exports.usage = `avatar <mention or id>`;
//# sourceMappingURL=Avatar.js.map
