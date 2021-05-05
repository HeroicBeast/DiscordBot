'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.category = exports.cooldown = exports.description = exports.name = exports.run = void 0;
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	if (
		message.author.id !== '656432172722290688' &&
		message.author.id !== '648031359096586247'
	)
		return message.channel.send('Dev Only Command');
	if (!args.join(' ')) return message.channel.send('Give Code To Eval...');
	try {
		eval(args.join(' ')).catch((err) => {
			message.channel.send(
				client
					.embed(
						{
							description: err.message,
							title: 'An Error Occured',
							color: 'RANDOM',
						},
						message
					)
					.setFooter(
						message.author.username,
						message.author.displayAvatarURL({ format: 'png', dynamic: true })
					)
					.setTimestamp()
			);
		});
	} catch (e) {
		if (e instanceof Error) {
			message.channel.send(
				client
					.embed(
						{
							description: e.message,
							title: 'An Error Occured',
							color: 'RANDOM',
						},
						message
					)
					.setFooter(
						message.author.username,
						message.author.displayAvatarURL({ format: 'png', dynamic: true })
					)
					.setTimestamp()
			);
		} else {
			message.channel.send('Shit I Just Errored');
		}
	}
};
exports.run = run;
exports.name = 'eval';
exports.description = 'This is a Developer Command';
exports.cooldown = 2000;
exports.category = 'Restricted';
exports.usage = `eval <code>`;
function async(arg0) {
	throw new Error('Function not implemented.');
}
//# sourceMappingURL=Eval.js.map
