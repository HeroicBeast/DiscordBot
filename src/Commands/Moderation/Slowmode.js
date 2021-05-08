'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.aliases = exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const ms_1 = __importDefault(require('ms'));
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	if (!mc.permissionsFor(message.author).has(`MANAGE_CHANNELS`))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**You are Missing The Permission To Manage This Channel To Use This Command**',
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
	if (!mc.permissionsFor(message.guild.me).has('MANAGE_CHANNELS'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**I am Missing The Manage Channels Permission in This Channel To Perform This Command**',
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
	if (!args[0]) {
		return mc
			.setRateLimitPerUser(0)
			.then(() => message.channel.send('**Slow Mode Has Been Turned Off**'));
	}
	if (!ms_1.default(args[0]))
		return message.channel.send(`The Duration You Provided Is Not Valid`);
	if (ms_1.default(args[0]) < 100)
		return message.channel.send(
			`**You Cannot Have a Slowmode Lower Than 1s and Higher Than 6hrs.**\nUse The Command Like This - \`sm <duration>s/m/h\``
		);
	if (ms_1.default(args[0]) > 21600000)
		return message.channel.send(
			`**You Cannot Have a Slowmode Lower Than 1s and Higher Than 6hrs.**\nUse The Command Like This - \`sm <duration>s/m/h\``
		);
	mc.setRateLimitPerUser(ms_1.default(args[0]) / 1000).then(() => {
		return message.channel.send(
			client
				.embed(
					{
						description: `**The Slowmode Has Been Set To ${ms_1.default(
							ms_1.default(args[0]),
							{
								long: true,
							}
						)}. To Turn Off Slowmode, Do The Command Again With No Duration.**`,
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
	});
};
exports.run = run;
exports.name = 'slowmode';
exports.category = 'Moderation';
exports.cooldown = 5000;
exports.description = 'Sets The SlowMode Of a Channel';
exports.usage = 'slowmode <duration>s/m/h';
exports.aliases = ['sm'];
//# sourceMappingURL=Slowmode.js.map
