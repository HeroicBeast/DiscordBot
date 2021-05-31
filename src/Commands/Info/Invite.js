'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.aliases = exports.name = exports.run = void 0;
const discord_js_1 = require('discord.js');
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	let e1 = new discord_js_1.MessageEmbed()
		.setTitle('Invite and Support Menu')
		.setDescription(
			'Click On The Link You Want\nClick on \\❌ To Delete This Message'
		)
		.addField(
			`Invite Link With Administrator Permissions`,
			`[Click Here](https://dsc.gg/thenexusbot)`,
			true
		)
		.addField(
			`Invite Link With Customizable Permissions`,
			`[Click Here](https://dsc.gg/nexuscustomperms)`,
			true
		)
		.addField(
			`Need Help? Join The Support Server`,
			`[Click Here](https://dsc.gg/nexussupport)`
		)
		.setFooter(
			`I would recommend you Administrator though, it simplifies things a lot. || ${message.author.username}`,
			message.author.displayAvatarURL({ format: 'png', dynamic: true })
		)
		.setTimestamp()
		.setColor('RANDOM');
	const msg = await message.channel.send(e1);
	await msg.react('❌');
	const collector = msg.createReactionCollector(
		(reaction, user) => user.id == message.author.id
	);
	collector.on('collect', async (reaction) => {
		if (reaction.emoji.name === '❌') {
			message.channel.send('Deleting Embed...').then((msg) => {
				msg.delete({ timeout: 1000 });
			});
			return msg.delete({ timeout: 2000 });
		}
	});
};
exports.run = run;
exports.name = 'invite';
exports.aliases = ['support'];
exports.category = 'Info';
exports.cooldown = 5000;
exports.description = `Invite The Bot!`;
exports.usage = `invite`;
//# sourceMappingURL=Invite.js.map
