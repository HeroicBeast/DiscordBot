'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.name = exports.run = void 0;
const run = async (client) => {
	client.logger.success(
		`${client.user.tag} is Online!\n${client.guilds.cache.size} Servers!\n${
			client.users.cache.size - 1
		} Users!`
	);
	client.user.setActivity(
		`${client.guilds.cache.size} Servers and ${client.users.cache.size} Users! || Invite Me At dsc.gg/nexus-discord-bot`,
		{ type: 'WATCHING' }
	);
	let channel = client.channels.cache.get(`835169189824036954`);
	channel.send(
		`${client.user.tag} is Online!\n${client.guilds.cache.size} Servers!\n${
			client.users.cache.size - 1
		} Users!`
	);
};
exports.run = run;
exports.name = `ready`;
//# sourceMappingURL=Ready.js.map
