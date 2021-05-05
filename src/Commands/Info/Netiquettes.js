'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.aliases = exports.name = exports.run = void 0;
const discord_js_1 = require('discord.js');
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	const GuildConfigSchema = await client.db.load('guildconfig');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: message.guild.id,
	});
	if (!args.length)
		return message.channel.send(
			`There are 5 Pages.\nDo **${
				GuildConfig?.Prefix || `+`
			}netiquettes <PageNumber>** To Get The Desired Page.`
		);
	let e1 = new discord_js_1.MessageEmbed()
		.setFooter(
			`Page 1 | ` + message.author.username,
			message.author.displayAvatarURL({ dynamic: true, format: 'png' })
		)
		.setTimestamp()
		.setColor('RANDOM')
		.setTitle('Be Nice!')
		.setDescription(
			`The first rule of internet etiquette is to be **kind and courteous.**\nRemember that whatever you send from your keyboard or your phone is still an extension of you, even though you're not with others in person.\nIt's just as **important to show good manners online** as it always has been.\n\nBeing nice includes **avoiding cyber bullying.**\nThink about how you would feel if someone said whatever you just typed about you. If you find it the **least bit disturbing, delete it.** `
		);
	let e2 = new discord_js_1.MessageEmbed()
		.setFooter(
			`Page 2 | ` + message.author.username,
			message.author.displayAvatarURL({ dynamic: true, format: 'png' })
		)
		.setTimestamp()
		.setColor('RANDOM')
		.setTitle('Learn Internet Acronyms')
		.setDescription(
			`As communication on the Internet explodes, so does the use of acronyms.\n**Learn what they mean** so you won’t misunderstand messages and comments.\n\nSome Common Internet Acronyms -:\n`
		)
		.addFields(
			{
				name: 'BTW',
				value: '**By The Way**',
				inline: true,
			},
			{
				name: 'JK',
				value: '**Just Kidding**',
				inline: true,
			},
			{
				name: 'NSFW',
				value: '**Not Safe For Work**',
				inline: true,
			},
			{ name: '\u200B', value: '\u200B' },
			{
				name: 'AFK',
				value: '**Away From Keyboard**',
				inline: true,
			},
			{
				name: 'POV',
				value: '**Point Of View**',
				inline: true,
			},
			{
				name: 'LOL',
				value: '**Laughing Out Loud**',
				inline: true,
			},
			{ name: '\u200B', value: '\u200B' }
		);
	let e3 = new discord_js_1.MessageEmbed()
		.setFooter(
			`Page 3 | ` + message.author.username,
			message.author.displayAvatarURL({ dynamic: true, format: 'png' })
		)
		.setTimestamp()
		.setColor('RANDOM')
		.setTitle(`Don’t Shout`)
		.setDescription(
			`**Avoid using all caps** in any email or post.\nIt is not only **difficult to read**, it **comes across as shouting**, which is rude.`
		);
	let e4 = new discord_js_1.MessageEmbed()
		.setFooter(
			`Page 4 | ` + message.author.username,
			message.author.displayAvatarURL({ dynamic: true, format: 'png' })
		)
		.setTimestamp()
		.setColor('RANDOM')
		.setTitle('Obey Copyright Laws')
		.setDescription(
			`**Never copy someone else’s work and post it as your own.**\nIt is against copyright law because it is **considered stealing.**\nIt is always a good idea to **ask permission before quoting anyone**, but that isn’t always possible.\nIf you want to quote someone, **keep the quote short, cite the source, and put a link to the complete written work.**`
		);
	let e5 = new discord_js_1.MessageEmbed()
		.setFooter(
			`Page 5 | ` + message.author.username,
			message.author.displayAvatarURL({ dynamic: true, format: 'png' })
		)
		.setTimestamp()
		.setColor('RANDOM')
		.setTitle('Before You Click “Send”')
		.setDescription(
			`It is always a good idea to **reread anything you type** before clicking the “send” button.\nFor those times when you need to post quickly, at least **check your spelling, grammar, and tone of the message.**`
		);
	if (args[0] == '1') return message.channel.send(e1);
	if (args[0] == '2') return message.channel.send(e2);
	if (args[0] == '3') return message.channel.send(e3);
	if (args[0] == '4') return message.channel.send(e4);
	if (args[0] == '5') return message.channel.send(e5);
	if (args[0] !== '1' || '2' || '3' || '4' || '5')
		return message.channel.send(`Invalid Page Number. There are Only 5 Pages.`);
};
exports.run = run;
exports.name = 'netiquettes';
exports.aliases = ['internetrules'];
exports.category = 'Info';
exports.cooldown = 5000;
exports.description = `Some Internet Etiquettes you should follow`;
exports.usage = `netiquettes <1-5>`;
//# sourceMappingURL=Netiquettes.js.map
