'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.aliases = exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	if (!args[0])
		return message.channel.send(
			`This Command Is To be Used Like This - **\`report <command name> <error/bug>\`**\nAlso Please Know If You Troll Around With This Command, We Will Blacklist You From The Bot`
		);
	const command =
		client.commands.get(args[0].toLowerCase()) ||
		client.commands.get(client.aliases.get(args[0].toLowerCase()));
	if (!command) return message.channel.send('This Is Not a Valid Command.');
	if (!args[1])
		return message.channel.send(
			`This Command Is To be Used Like This - **\`report <command name> <error/bug>\`**\nAlso Please Know If You Troll Around With This Command, We Will Blacklist You From The Bot`
		);
	let report = args.join(' ').slice(args[0].length);
	let rchannel = client.channels.cache.get(`836456950547873814`);
	rchannel
		.send(
			`Username: ${message.author.username}\nCommand: ${command.name}\nUserID: ${message.author.id}\nServer Name and ID: ${message.guild.name} | ${message.guild.id}\nBug Report: ${report}\n...`
		)
		.then(() => {
			message.channel.send('Your Bug Report Has Been Sent!');
		});
};
exports.run = run;
exports.name = 'report';
exports.category = 'Utility';
exports.cooldown = 5000;
exports.description = 'Report Command Bugs To Us';
exports.usage = 'report <command name> <error/bug>';
exports.aliases = ['bug'];
//# sourceMappingURL=Report.js.map
