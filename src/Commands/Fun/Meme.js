'use strict';
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				Object.defineProperty(o, k2, {
					enumerable: true,
					get: function () {
						return m[k];
					},
				});
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, 'default', { enumerable: true, value: v });
		  }
		: function (o, v) {
				o['default'] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const api = __importStar(require('imageapi.js'));
const run = async (client, message, args) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	const subreddits = [
		'Memes',
		'dankmemes',
		'Relatable',
		'PewdiepieSubmissions',
		'ComedyCemetery',
		'funny',
'meirl',
	];
	const subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
	const meme = await api.advanced(subreddit, 'top');
	if (meme.img.toLowerCase().includes('imgur'))
		return message.channel.send(`Couldn't Get That Meme.. Try Again?`);
	if (meme.img.toLowerCase().includes('gallery'))
		return message.channel.send(`Couldn't Get That Meme.. Try Again?`);
	if (meme.img.toLowerCase().includes('v.redd.it'))
		return message.channel.send(`Couldn't Get That Meme.. Try Again?`);
	if (meme.img.toLowerCase().includes('youtu.be'))
		return message.channel.send(`Couldn't Get That Meme.. Try Again?`);
	message.channel.send(
		client
			.embed(
				{
					title: meme.title || 'No Title Provided',
					description: `**${meme.upvoteRatio}% People Liked [This Meme](${meme.img}) from [r/${subreddit}](https://reddit.com/r/${subreddit})**`,
					color: 'RANDOM',
					image: {
						url: meme.img,
					},
				},
				message
			)
			.setFooter(
				`${meme.upvotes}👍 | ${meme.downvotes}👎 | ` + message.author.username,
				message.author.displayAvatarURL({ dynamic: true, format: 'png' })
			)
			.setTimestamp()
	);
};
exports.run = run;
exports.name = 'meme';
exports.category = 'Fun';
exports.cooldown = 5000;
exports.description = `Memes...`;
exports.usage = `meme`;
//# sourceMappingURL=Meme.js.map
