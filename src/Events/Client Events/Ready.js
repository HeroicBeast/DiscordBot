'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.name = exports.run = void 0;
const run = async (client) => {
let count = 0;
client.guilds.cache.forEach(guild => count += guild.memberCount)
	client.logger.success(
		`${client.user.tag} is Online!\n${client.guilds.cache.size} Servers!\n${count} Users!`
	);

	client.user.setActivity(
		`${client.guilds.cache.size} Servers and ${count} Users! || Invite Me At dsc.gg/thenexusbot`,
		{ type: 'WATCHING' }
	);
	let channel = client.channels.cache.get(`835169189824036954`);
	channel.send(
		`${client.user.tag} is Online!\n${client.guilds.cache.size} Servers!\n${count} Users!`
	);
};
exports.run = run;
exports.name = `ready`;
//# sourceMappingURL=Ready.js.map
