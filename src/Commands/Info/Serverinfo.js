'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.description = exports.usage = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const moment_1 = __importDefault(require('moment'));
const discord_js_1 = require('discord.js');
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	let guild = message.guild; //Done
	let banner = ''; //Done
	if (!guild.banner) banner = '';
	if (guild.banner) banner = guild.bannerURL({ format: 'png' });
	let channels = '1'; //Done
	if (guild.channels.cache.size > 1)
		channels = `**${guild.channels.cache.size}**`;
	let description = '**No Description Available**'; //Done
	if (!guild.description) {
		description = '**No Description Available**';
	} else if (guild.description.length > 65) {
		description =
			'Cannot Display Guild Description As It Is Above 65 Characters';
	} else {
		description = `**\`${guild.description}\`**`;
	}
	let emojis = `**${guild.emojis.cache.size}**`; //Done
	let fetchbans = await guild.fetchBans();
	let bans = `**${fetchbans.size}**`; //Done
	let fetchinvites = await guild.fetchInvites();
	let invites = `**${fetchinvites.size}**`; //Done
	let fetchwebhooks = await guild.fetchWebhooks();
	let webhooks = `**${fetchwebhooks.size}**`; //Done
	let id = guild.id; //Done
	let membercount = `**\`${guild.memberCount}\`**`; //Done
	let owner = guild.ownerID; //Done
	let partner = '**No**'; //Done
	if (`${guild.partnered.valueOf()}` == 'true') partner = '**`Partnered!`**';
	let boosts = `${guild.premiumSubscriptionCount}`; //Done
	let boostlevel = `${guild.premiumTier}`; //Done
	let roles = `**${guild.roles.cache.size - 1}**`; //Done
	let rules = '**No Rules Channel**'; //Done
	if (!guild.rulesChannel) {
		rules = '**No Rules Channel**';
	} else if (guild.rulesChannelID) {
		rules = `<#${guild.rulesChannelID}>`;
	}
	let vanity = `**No Vanity URL**`; //Done
	if (!guild.vanityURLCode) {
		vanity = `**No Vanity URL**`;
	} else {
		vanity = `**https://discord.gg/${guild.vanityURLCode} | This Link Has Been Used ${guild.vanityURLUses} Times.**`;
	}
	let verification = `**\`${guild.verificationLevel.toUpperCase()}\`**`; //Done
	let region = `**\`${guild.region.toUpperCase()}\`**`; //Done
	let verified = '**No**'; //Done
	if (`${guild.verified.valueOf()}` == 'true') verified = '**`Verified!`**';
	const create = moment_1.default
		.utc(guild.createdAt)
		.format('DD.MM.YYYY UTC HH:mm:ss');
	const megaembed = new discord_js_1.MessageEmbed()
		.setTimestamp()
		.setTitle(`${message.guild.name}'s Information`)
		.setThumbnail(guild.iconURL({ format: 'png', dynamic: true }))
		.setImage(banner)
		.setColor('#30D5C8')
		.setFooter(
			message.author.username,
			message.author.displayAvatarURL({ format: 'png', dynamic: true })
		)
		.addFields(
			{
				name: 'Server ID and Created At: ',
				value: `**\`${id}\`** | **\`${create}\`**`,
			},
			{
				name: 'Server Owner: ',
				value: `<@!${owner}>`,
			},
			{
				name: 'Rules Channel: ',
				value: rules,
			},
			{
				name: 'Server Region: ',
				value: region,
			},
			{
				name: 'Vanity Url? ',
				value: vanity,
			},
			{
				name: 'Boosts: ',
				value: `**This Server Has Been Boosted \`${boosts} Times\` and is On \`Level ${boostlevel}\`**`,
			},
			{
				name: 'Verification Level: ',
				value: verification,
			},
			{
				name: 'Partnered? ',
				value: partner,
			},
			{
				name: 'Verified? ',
				value: verified,
			},
			{ name: 'Server Description: ', value: description },
			{
				name: 'MemberCount: ',
				value: membercount,
			},
			{
				name: 'Emoji Count: ',
				value: emojis,
			},
			{
				name: 'Channels Count: ',
				value: channels,
			},
			{
				name: 'Role Count: ',
				value: roles,
			},
			{
				name: 'Active Bans: ',
				value: bans,
			},
			{
				name: 'Active Invites: ',
				value: invites,
			},
			{
				name: 'Active Webhooks: ',
				value: webhooks,
			}
		);
	message.channel.send(megaembed);
};
exports.run = run;
exports.name = 'serverinfo';
exports.category = 'Info';
exports.cooldown = 10000;
exports.usage = 'serverinfo';
exports.description = 'Get Information On The Server You Use This Command In';
//# sourceMappingURL=Serverinfo.js.map
