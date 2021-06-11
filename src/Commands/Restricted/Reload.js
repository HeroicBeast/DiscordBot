'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const glob_1 = __importDefault(require('glob'));
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	if (
		message.author.id !== '656432172722290688' &&
		message.author.id !== '648031359096586247' &&
		message.author.id !== '836080543249596426'
	)
		return message.channel.send('Dev Only Command');
	client.commands.sweep(() => true);
	glob_1.default(`${__dirname}/../**/*.ts`, async (err, filePaths) => {
		if (err) return console.log(err);
		filePaths.forEach((file) => {
			delete require.cache[require.resolve(file)];
			const pull = require(file);
			if (pull.name) {
				message.channel.send(
					`Reloaded **${pull.name}.ts** \\<:check:847162810622410793>`
				);
				console.log(`Reloaded ${pull.name}.ts ✅\n`);
				client.commands.set(pull.name, pull);
			}
			if (pull.aliases && Array.isArray(pull.aliases)) {
				pull.aliases.forEach((alias) => {
					client.aliases.set(alias, pull.name);
				});
			}
		});
		message.channel.send(
			'**Reloaded All Commands** \\<:check:847162810622410793>'
		);
		console.log(`Reloaded All Commands ✅\n`);
	});
};
exports.run = run;
exports.name = 'reload';
exports.category = 'Restricted';
exports.cooldown = 5000;
exports.description = `This is A Developer Command`;
exports.usage = `reload`;
//# sourceMappingURL=Reload.js.map
