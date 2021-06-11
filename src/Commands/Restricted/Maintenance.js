'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.category = exports.cooldown = exports.description = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	const DevSchema = await client.db.load('dev');
	const dev = await DevSchema.findOne({
		ID: `656432172722290688`,
	});
	if (
		message.author.id !== '656432172722290688' &&
		message.author.id !== '648031359096586247' &&
		message.author.id !== '836080543249596426'
	)
		return message.channel.send('Dev Only Command');
	if (dev.Maintenance == `false`) {
		DevSchema.update(
			{ ID: `656432172722290688` },
			{ Maintenance: `true` }
		).then(() =>
			message.channel
				.send(
					`Maintenance Mode Has Been Turned On! To Disable It, Go To Your Mongodb Account and In Clusters Collection Turn The String To False`
				)
				.then(() => client.user.setActivity(`Maintenance Mode!`))
		);
		client.user.setActivity('Maintenance Mode', { type: 'PLAYING' });
	} else if (dev.Maintenance == `true`) {
		DevSchema.update({ ID: `656432172722290688` }, { Maintenance: `false` })
			.then(() => message.channel.send(`Maintenance Mode Has Been Turned Off!`))
			.then(() =>
				client.user.setActivity(
					`${client.guilds.cache.size} Servers and ${client.users.cache.size} Users! || Invite Me At dsc.gg/nexus-discord-bot`,
					{ type: 'WATCHING' }
				)
			);
	} else message.channel.send('Errored...');
};
exports.run = run;
exports.name = 'maintenance';
exports.description = 'This is a Developer Command';
exports.cooldown = 2000;
exports.category = 'Restricted';
exports.usage = `maintenance`;
//# sourceMappingURL=Maintenance.js.map
