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
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const e = __importStar(require('discord-image-generation'));
const discord_js_1 = __importDefault(require('discord.js'));
const run = async (client, message, args) => {
	let img = await new e.Blink().getImage(
		client.user.displayAvatarURL({ format: 'png', dynamic: false }),
		message.author.displayAvatarURL({ format: 'png', dynamic: false })
	);
	let attch = new discord_js_1.default.MessageAttachment(img, 'Blink.gif');
	if (!args.length) return message.channel.send(attch);
	let member =
		message.mentions.members.first() ||
		message.guild.members.cache.get(args[0]);
	if (!member) return message.channel.send(attch);
	let img2 = await new e.Blink().getImage(
		message.author.displayAvatarURL({ format: 'png', dynamic: false }),
		member.user.displayAvatarURL({ format: 'png', dynamic: false })
	);
	let attch2 = new discord_js_1.default.MessageAttachment(img2, 'Blink.gif');
	message.channel.send(attch2);
};
exports.run = run;
exports.name = 'blink';
exports.category = 'Image';
exports.cooldown = 5000;
exports.description = 'Make 2 Avatars Blink';
exports.usage = 'blink <mention or id>';
//# sourceMappingURL=Blink.js.map
