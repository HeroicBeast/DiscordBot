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
const run = async (client, message) => {
	let mc = message.channel;
	if (!mc.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return;
	const image = await api.advanced('aww', 'top');
	if (!image.img)
		return message.channel.send("I Couldn't Get The Image. Try Again?");
	message.channel.send(
		client
			.embed(
				{
					title: image.title || 'No Title',
					description: `**${image.upvoteRatio}% People Liked [This Image](${image.img})**`,
					color: 'RANDOM',
				},
				message
			)
			.setFooter(
				`${image.upvotes}👍 | ${image.downvotes}👎 | ` +
					message.author.username,
				message.author.displayAvatarURL({ dynamic: true, format: 'png' })
			)
			.setTimestamp()
			.setImage(image.img)
	);
};
exports.run = run;
exports.name = 'aww';
exports.category = 'Fun';
exports.cooldown = 5000;
exports.description = `Get Random Cute Images From Reddit`;
exports.usage = `meme`;
//# sourceMappingURL=Aww.js.map
