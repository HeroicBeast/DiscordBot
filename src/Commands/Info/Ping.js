'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.aliases = exports.name = exports.run = void 0;
const discord_js_1 = require('discord.js');
const run = async (client, message) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	let days = 0;
	let week = 0;
	let uptime = '';
	let totalSeconds = client.uptime / 1000;
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = Math.floor(totalSeconds % 60);
	if (hours > 24) {
		days = days + 1;
		hours = 0;
	}
	if (week - 0) {
		uptime += `${week} Week(s)`;
	}
	if (minutes > 60) {
		minutes = 0;
	}
	uptime += `${days}d, ${hours}h, ${minutes}m and ${seconds}s`;
	const e1 = new discord_js_1.MessageEmbed()
		.setDescription(
			`**Servers: \`${client.guilds.cache.size}\`**\n**Users: \`${client.users.cache.size}\`**`
		)
		.addField(`WebSocket Ping`, `${client.ws.ping}MS!`, true)
		.addField(
			`Bot Latency`,
			`${Date.now() - message.createdTimestamp}MS!`,
			true
		)
		.addField('Bot Uptime', `${uptime}!`, true)
		.setFooter(
			message.author.username,
			message.author.displayAvatarURL({ dynamic: true, format: 'png' })
		)
		.setTimestamp()
		.setColor('RANDOM')
		.setTitle('Pong\\🏓!');
	message.channel.send(e1);
};
exports.run = run;
exports.name = 'ping';
exports.aliases = ['uptime'];
exports.category = 'Info';
exports.cooldown = 5000;
exports.description = `Bot Latency`;
exports.usage = `ping`;
//# sourceMappingURL=Ping.js.map
