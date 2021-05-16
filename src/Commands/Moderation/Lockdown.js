'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.aliases = exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	if (!message.member.hasPermission('ADMINISTRATOR'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**You are Missing The Administrator Permission To Use This Command**',
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
	if (!message.guild.me.hasPermission('ADMINISTRATOR'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**I am Missing The Administrator Permission To Perform This Command**',
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
	const msg = await message.channel.send(
		client
			.embed(
				{
					description: `**Do You Really Want To Lock The Server?\nThis Will Prevent Almost Everyone From Sending Messages (Only \`Roles/Members With Send Messages Overwrites\` In The Channels Will Be Able To Send Messages)**\n**React With \\✅ If You Want To Continue. Click on \\❌ To Delete This Message.**`,
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
	await msg.react(`✅`);
	await msg.react(`❌`);
	const collector = msg.createReactionCollector(
		(reaction, user) => user.id == message.author.id
	);
	collector.on(`collect`, async (reaction) => {
		if (reaction.emoji.name === '❌') {
			message.channel.send('Command Cancelled!').then((msg) => {
				msg.delete({ timeout: 1000 });
			});
			return msg.delete({ timeout: 2000 });
		} else if (reaction.emoji.name === '✅') {
			const msg2 = await message.channel.send(`Locking The Server Down...`);
			message.guild.channels.cache.each((c) => {
				try {
					c.updateOverwrite(message.guild.roles.everyone, {
						SEND_MESSAGES: false,
					});
				} catch (e) {
					if (e instanceof Error) {
						message.channel.send(`Could Not Lock <#${c.id}>`);
					}
				}
			});
			await msg2.edit(`The Server Has Been Locked Down!`);
		}
	});
};
exports.run = run;
exports.name = 'lockdown';
exports.category = 'Moderation';
exports.cooldown = 5000;
exports.description = 'Locks The Whole Server Down So No One Can Talk';
exports.usage = 'lockdown';
exports.aliases = ['ld'];
//# sourceMappingURL=Lockdown.js.map
