'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	if (!mc.permissionsFor(message.guild.me).has('MANAGE_MESSAGES'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**I am Missing The Manage Messages Permission in This Channel To Perform This Command**',
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
	if (!args.length) {
		return message.channel.send('Send Something For Me To Say...');
	}
	message.channel.send(args.join(' ')).then(() => message.delete());
};
exports.run = run;
exports.name = 'say';
exports.category = 'Fun';
exports.cooldown = 3000;
exports.description = 'Makes The Bot Say Whatever U Want It To Say';
exports.usage = 'say <message>';
//# sourceMappingURL=Say.js.map
