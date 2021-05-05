'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.cooldown = exports.category = exports.name = exports.run = void 0;
const ms_1 = __importDefault(require('ms'));
const alpha_sort_1 = __importDefault(require('alpha-sort'));
const run = async (client, message, args) => {
	const fields = [...client.categories].map((value) => {
		return {
			name: `${value[0].toUpperCase() + value.slice(1).toLowerCase()} [${
				client.commands.filter(
					(command) => command.category.toLowerCase() == value.toLowerCase()
				).size
			}]`,
			value: client.commands
				.filter((cmd) => cmd.category.toLowerCase() == value.toLowerCase())
				.map((cmd) => `\`${cmd.name}\``)
				.join(' **-** '),
		};
	});
	const commandEmbed = client
		.embed({ fields, color: '#30D5C8', title: 'Help Menu' }, message)
		.setFooter(
			`Developed By ! The Heroic Beast#4445 and </GamerDuck>#6969 | ${
				client.commands.size - 5
			} Available Commands`,
			message.author.displayAvatarURL({ format: 'png', dynamic: true })
		)
		.setTimestamp();
	if (!args.length) return await message.channel.send(commandEmbed);
	const cmd =
		client.commands.get(args[0]) ||
		client.commands.get(client.aliases.get(args[0]));
	if (!cmd) return await message.channel.send(commandEmbed);
	return await message.channel.send(
		client
			.embed(
				{
					description: Object.entries(cmd)
						.filter((value) => value[0] != 'run')
						.sort((a, b) => alpha_sort_1.default()(a[0], b[0]))
						.map((value) =>
							typeof value[1] == 'number'
								? `${
										value[0][0].toUpperCase() + value[0].slice(1)
								  }: \`${ms_1.default(value[1], { long: true })}\``
								: value[1]?.map
								? value[1]
										.map(
											(value2) =>
												`${
													value[0][0].toUpperCase() + value[0].slice(1)
												}: \`${value2}\``
										)
										.join(` **-** `)
								: `${value[0][0].toUpperCase() + value[0].slice(1)}: \`${
										value[1]
								  }\``
						)
						.join(`\n`),
					color: '#30D5C8',
					title: 'Help Menu',
				},
				message
			)
			.setFooter(
				`Developed By ! The Heroic Beast#4445 and </GamerDuck>#6969 | ${
					client.commands.size - 5
				} Available Commands`,
				message.author.displayAvatarURL({ format: 'png', dynamic: true })
			)
			.setTimestamp()
	);
};
exports.run = run;
exports.name = 'help';
exports.category = 'Info';
exports.cooldown = 5000;
exports.description = 'Shows The Help Menu';
exports.usage = 'help <command>';
//# sourceMappingURL=Help.js.map
