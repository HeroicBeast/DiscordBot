'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.category = exports.cooldown = exports.description = exports.name = exports.run = void 0;
const ms_1 = __importDefault(require('ms'));
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	const GuildConfigSchema = await client.db.load('guildconfig');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: message.guild.id,
	});
	if (!message.member.hasPermission('MANAGE_MESSAGES'))
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
	if (!args.length)
		return message.channel.send(
			'Mention or Send The Id Of The Member You Want To Mute...'
		);
	let member =
		message.mentions.members.first() ||
		message.guild.members.cache.get(args[0]);
	if (!member) return message.channel.send('Invalid Member...');
	let muterole = GuildConfig?.Muterole;
	if (!muterole)
		return message.channel.send(
			client
				.embed(
					{
						description: `**There is No Muterole Setup For This Server. Set One Up With The Muterole Command**`,
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
	if (!message.guild.roles.cache.get(muterole))
		return message.channel.send(
			client
				.embed(
					{
						description: `**The MuteRole That Had Been Setup Earlier Is No Longer There. Please Setup Another One Using The Muterole Command.**`,
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
	if (!message.guild.me.hasPermission('MANAGE_ROLES'))
		return message.channel.send(
			client
				.embed(
					{
						description:
							'**I am Missing The Manage Roles Permission To Perform This Command**',
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
	if (
		message.guild.roles.cache.get(muterole).position >
		message.guild.me.roles.highest.position
	)
		return message.channel.send(
			client
				.embed(
					{
						description: `**I Cannot Mute People If The Mute Role is Higher Than My Own Role**`,
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
	if (!args[1])
		return message.channel.send(
			`Please Send a Time To Mute \`${
				member.nickname || member.user.tag
			}\` For. If You Want To Permanently Mute \`${
				member.nickname || member.user.tag
			}\` run the command: \`${GuildConfig?.Prefix || '+'}mute ${
				member.user.id
			} perm\``
		);
	if (args[1] == 'perm') {
		return member.roles.add(muterole).then(() => {
			message.channel.send(
				client
					.embed(
						{
							title: 'Member Muted',
							description: `**\`${member.user.tag}\` Has Been Muted Permanently By \`${message.author.username}\`**`,
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
	} else if (!ms_1.default(args[1]))
		return message.channel.send(`Invalid Time...`);
	member.roles.add(muterole).then(() => {
		message.channel.send(
			client
				.embed(
					{
						title: 'Member Muted',
						description: `**\`${
							member.user.tag
						}\` Has Been Muted For ${ms_1.default(ms_1.default(args[1]), {
							long: true,
						})} By \`${message.author.username}\`**`,
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
	setTimeout(function () {
		member.roles.remove(muterole);
	}, ms_1.default(args[1]));
};
exports.run = run;
exports.name = 'mute';
exports.description =
	'Allows Moderators To Mute People So They Cannot Send Messages. (Notice: Right Now, If We Restart The Bot and You have a Current Mute Period Going On, The Bot Will Not Unmute That Person. We Are trying To fix this Bug.)';
exports.cooldown = 5000;
exports.category = 'Moderation';
exports.usage = `mute <mention or id> <time/perm>`;
//# sourceMappingURL=Mute.js.map
