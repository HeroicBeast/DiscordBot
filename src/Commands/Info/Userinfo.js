'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.aliases = exports.name = exports.run = void 0;
const discord_js_1 = require('discord.js');
const moment_1 = __importDefault(require('moment'));
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	const member =
		message.mentions.members.first() ||
		message.guild.members.cache.get(args[0]) ||
		message.member;
	const joindate = moment_1.default
		.utc(member.joinedAt)
		.format('DD.MM.YYYY UTC HH:mm:ss');
	let status = 'lol';
	if (member.presence.status === 'dnd') status = '⛔ DND';
	if (member.presence.status === 'online') status = '🟢 Online';
	if (member.presence.status === 'idle') status = '🌙 Idle';
	if (member.presence.status === 'offline') status = '⚫ Offline';
	let permissions = 'No Key Permissions';
	if (member.permissions.has('MANAGE_MESSAGES'))
		permissions = 'Manage Messages';
	if (member.permissions.has('MANAGE_NICKNAMES'))
		permissions = 'Manage Nicknames';
	if (member.permissions.has('MANAGE_ROLES')) permissions = 'Manage Roles';
	if (member.permissions.has('MANAGE_CHANNELS'))
		permissions = 'Manage Channels';
	if (member.permissions.has('MANAGE_EMOJIS')) permissions = 'Manage Emojis';
	if (member.permissions.has('MANAGE_GUILD')) permissions = 'Manage Server';
	if (member.permissions.has('MANAGE_WEBHOOKS'))
		permissions = 'Manage Webhooks';
	if (
		member.permissions.has('MANAGE_MESSAGES') &&
		member.permissions.has('MANAGE_NICKNAMES')
	)
		permissions = 'Manage Messages and Manage Nicknames';
	if (
		member.permissions.has('MANAGE_MESSAGES') &&
		member.permissions.has('MANAGE_NICKNAMES') &&
		member.permissions.has('MANAGE_ROLES')
	)
		permissions = 'Manage Messages, Manage Nicknames and Manage Roles';
	if (
		member.permissions.has('MANAGE_MESSAGES') &&
		member.permissions.has('MANAGE_NICKNAMES') &&
		member.permissions.has('MANAGE_ROLES') &&
		member.permissions.has('MANAGE_CHANNELS')
	)
		permissions =
			'Manage Messages, Manage Nicknames, Manage Roles and Manage Channels';
	if (
		member.permissions.has('MANAGE_MESSAGES') &&
		member.permissions.has('MANAGE_NICKNAMES') &&
		member.permissions.has('MANAGE_ROLES') &&
		member.permissions.has('MANAGE_CHANNELS') &&
		member.permissions.has('MANAGE_EMOJIS')
	)
		permissions =
			'Manage Messages, Manage Nicknames, Manage Roles, Manage Channels and Manage Emojis';
	if (
		member.permissions.has('MANAGE_MESSAGES') &&
		member.permissions.has('MANAGE_NICKNAMES') &&
		member.permissions.has('MANAGE_ROLES') &&
		member.permissions.has('MANAGE_CHANNELS') &&
		member.permissions.has('MANAGE_EMOJIS') &&
		member.permissions.has('MANAGE_GUILD')
	)
		permissions =
			'Manage Messages, Manage Nicknames, Manage Roles, Manage Channels, Manage Emojis and Manage Server';
	if (
		member.permissions.has('MANAGE_MESSAGES') &&
		member.permissions.has('MANAGE_NICKNAMES') &&
		member.permissions.has('MANAGE_ROLES') &&
		member.permissions.has('MANAGE_CHANNELS') &&
		member.permissions.has('MANAGE_EMOJIS') &&
		member.permissions.has('MANAGE_GUILD') &&
		member.permissions.has('MANAGE_WEBHOOKS')
	)
		permissions =
			'Manage Messages, Manage Nicknames, Manage Roles, Manage Channels, Manage Emojis, Manage Server and Manage Webhooks';
	if (
		member.permissions.has('ADMINISTRATOR') &&
		member.permissions.has('MANAGE_MESSAGES') &&
		member.permissions.has('MANAGE_NICKNAMES') &&
		member.permissions.has('MANAGE_ROLES') &&
		member.permissions.has('MANAGE_CHANNELS') &&
		member.permissions.has('MANAGE_EMOJIS') &&
		member.permissions.has('MANAGE_GUILD') &&
		member.permissions.has('MANAGE_WEBHOOKS')
	)
		permissions = 'Administrator';
	const botembed = new discord_js_1.MessageEmbed()
		.setAuthor(`Who Is ${member.user.username}?`)
		.setColor('RANDOM')
		.setTitle(`${member.user.tag}`)
		.setThumbnail(
			member.user.displayAvatarURL({ format: 'png', dynamic: true })
		)
		.setTimestamp()
		.setFooter(
			message.author.username,
			message.author.displayAvatarURL({ dynamic: true, format: 'png' })
		)
		.addFields(
			{
				name: '• ID: ',
				value: `\`${member.user.id}\``,
			},
			{
				name: '• Joined Server: ',
				value: `\`${joindate}\``,
			},
			{
				name: '• Account Creation: ',
				value: `\`${moment_1.default
					.utc(member.user.createdAt)
					.format('DD.MM.YYYY UTC HH:mm:ss')}\``,
			},
			{
				name: '• Status: ',
				value: `\`${status}\``,
			},
			{
				name: `• Role Count: `,
				value: `\`${member.roles.cache.size - 1}\``,
			},
			{
				name: `• Nickname: `,
				value: `\`${member.nickname || 'No Nickname Set'}\``,
			},
			{
				name: `• Key Permissions: `,
				value: `\`${permissions}\``,
			}
		);
	if (member.user.bot) return message.channel.send(botembed);
	let badges = '`No House`';
	if (member.user.flags.has('HOUSE_BRAVERY'))
		badges = '<:HypesquadBravery:833656044127387658>';
	if (member.user.flags.has('HOUSE_BRILLIANCE'))
		badges = '<:HypesquadBrilliance:833656153888129024>';
	if (member.user.flags.has('HOUSE_BALANCE'))
		badges = '<:HypesquadBalance:833656108614156309>';
	let house = ' ';
	if (member.user.flags.has('HOUSE_BRAVERY')) house = '`Bravery`';
	if (member.user.flags.has('HOUSE_BRILLIANCE')) house = '`Brilliance`';
	if (member.user.flags.has('HOUSE_BALANCE')) house = '`Balance`';
	const embed = new discord_js_1.MessageEmbed()
		.setAuthor(`Who Is ${member.user.username}?`)
		.setColor('RANDOM')
		.setTitle(`${member.user.tag}`)
		.setThumbnail(
			member.user.displayAvatarURL({ format: 'png', dynamic: true })
		)
		.setTimestamp()
		.setFooter(
			message.author.username,
			message.author.displayAvatarURL({ dynamic: true, format: 'png' })
		)
		.addFields(
			{
				name: '• ID: ',
				value: `\`${member.user.id}\``,
			},
			{
				name: '• Joined Server: ',
				value: `\`${joindate}\``,
			},
			{
				name: '• Account Creation: ',
				value: `\`${moment_1.default
					.utc(member.user.createdAt)
					.format('DD.MM.YYYY UTC HH:mm:ss')}\``,
			},
			{
				name: '• Status: ',
				value: `\`${status}\``,
			},
			{
				name: `• Role Count: `,
				value: `\`${member.roles.cache.size - 1}\``,
			},
			{
				name: `• Nickname: `,
				value: `\`${member.nickname || 'No Nickname Set'}\``,
			},
			{
				name: `• Key Permissions: `,
				value: `\`${permissions}\``,
			},
			{
				name: '• Hypesquad House: ',
				value: `${badges} ${house}`,
			}
		);
	message.channel.send(embed);
};
exports.run = run;
exports.name = 'userinfo';
exports.aliases = ['whois'];
exports.category = 'Info';
exports.cooldown = 5000;
exports.description = `Get Info on a User`;
exports.usage = `userinfo <mention or id>`;
//# sourceMappingURL=Userinfo.js.map
