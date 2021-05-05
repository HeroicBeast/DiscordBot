'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.aliases = exports.name = exports.run = void 0;
const discord_js_1 = require('discord.js');
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	let e1 = new discord_js_1.MessageEmbed()
		.setTitle('Invite Menu')
		.setDescription(
			'Click On The Link You Want\nClick on \\❌ To Delete This Message'
		)
		.addField(
			`Invite Link With Administrator Permissions`,
			`[Click Here](https://discord.com/api/oauth2/authorize?client_id=831846915221356574&permissions=8&scope=bot%20applications.commands)`,
			true
		)
		.addField(
			`Invite Link With Customizable Permissions`,
			`[Click Here](https://discord.com/api/oauth2/authorize?client_id=831846915221356574&permissions=4260752503&scope=bot%20applications.commands)`,
			true
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
exports.aliases = ['inv'];
exports.category = 'Info';
exports.cooldown = 5000;
exports.description = `Invite The Bot!`;
exports.usage = `invite`;
//# sourceMappingURL=Invite.js.map
