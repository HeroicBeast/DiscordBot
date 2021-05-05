'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.aliases = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	if (!message.member.hasPermission(`MANAGE_MESSAGES`))
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
	if (!message.guild.me.hasPermission(`MANAGE_MESSAGES`))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**I am Missing The Manage Messages Permission To Perform This Command**',
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
			client
				.embed(
					{
						description: '**Send The Amount Of Messages You Want To Purge**',
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
	if (!parseInt(args[0]))
		return message.channel.send(
			client
				.embed(
					{
						description: '**Send a Number That Is Not 0**',
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
	if (parseInt(args[0]) < 1 || parseInt(args[0]) > 99)
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**The Number of Messages To Be Deleted Should be Between 1-99**',
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
	await message.channel.messages
		.fetch({ limit: parseInt(args[0]) + 1 })
		.then((messages) => {
			let channel = message.channel;
			channel.bulkDelete(messages);
			channel
				.send('Deleted ' + (messages.size - 1) + ' Messages')
				.then((msg) => {
					msg.delete({ timeout: 1750 });
				});
		});
};
exports.run = run;
exports.name = 'purge';
exports.aliases = ['clear'];
exports.category = 'Moderation';
exports.cooldown = 3000;
exports.description = `Bulk Deletes A Number Of Messages at a Time`;
exports.usage = `purge <1-99>`;
//# sourceMappingURL=Purge.js.map
