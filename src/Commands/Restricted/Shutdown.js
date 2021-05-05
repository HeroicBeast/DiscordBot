'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.aliases = exports.category = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	if (
		message.author.id !== '656432172722290688' &&
		message.author.id !== '648031359096586247'
	)
		return message.channel.send('Dev Only Command');
	const msg = await message.channel.send(
		client
			.embed(
				{
					title: 'Shut Down The Bot?',
					description:
						'\\✅ Click this to shutdown the bot! \n\\❌ Click this to cancel the process!',
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
	await msg.react('✅');
	await msg.react('❌');
	const collector = msg.createReactionCollector(
		(reaction, user) => user.id == message.author.id
	);
	collector.on('collect', async (reaction) => {
		if (reaction.emoji.name === '❌') {
			message.channel.send('Command Cancelled!').then((msg) => {
				msg.delete({ timeout: 1000 });
			});
			return msg.delete({ timeout: 2000 });
		}
		if (reaction.emoji.name === '✅') {
			message.channel.send('Shutting This Bot Down...').then(() => {
				process.exit(1);
			});
		}
	});
};
exports.run = run;
exports.name = 'shutdown';
exports.category = 'Restricted';
exports.aliases = ['stop'];
exports.cooldown = 3000;
exports.description = `This is A Developer Command`;
exports.usage = `shutdown`;
//# sourceMappingURL=Shutdown.js.map
