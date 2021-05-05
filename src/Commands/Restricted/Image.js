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
exports.aliases = exports.usage = exports.description = exports.cooldown = exports.category = exports.name = exports.run = void 0;
const e = __importStar(require('discord-image-generation'));
const discord_js_1 = require('discord.js');
const run = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			`This is a Direct Extension Of The Package **\`discord-image-generation\`**.\nUsage: image <type> <img link>\nTypes:1)Blur\n2)Gay\n3)Greyscale\n4)Invert\n5)Sepia\n6)Blink\n7)Triggered\n8)Ad\n9)Affect\n10)Batslap\n11)Beautiful\n12)Bed\n13)Bobross\n14)ConfusedStonks\n15)Delete\n16)DiscordBlack\n17)DiscordBlue\n18)DoubleStonk\n19)Facepalm\n20)Hitler\n21)Jail\n22)Karaba\n23)Kiss\n24)LisaPresentation\n25)Mms\n26)NotStonk\n27)Podium\n28)Poutine\n29)Rip\n30)Spank\n31)Stonks\n32)Tatoo\n33)Thomas\n34)Trash\n35)Wanted\n36)Circle\n37)Color\n\nLink Requirements -\n1)Links Ending With .png and .jpg/jpeg(1-5, 8-23, 25-36). 6-7 Need Links Ending With .gif\n2)Type 37 Needs To Be a Hex Code\n3)You Can Add Upto 3 Links in Type 6\n4)Type 10, 12, 18, 23 and 30 Have a Requirement Of 2 Links\n5)Type 24 Requires a Text and Not a Link. The Text Should Not Exceed 300 Characters\n6)Type 27 Requires 3 Avatars and 3 Names(Should Not Exceed More Than 20 Characters) In The Order(<Avatar1> <Avatar2> <Avatar3> <Name1> <Name2> <Name3)\n7)Type 36 Requires A Symbol as The Currency For The Wanted Price.`
		);
	if (args[0].toLowerCase() == 'blur') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Blur().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'gay') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Gay().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'grey') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Greyscale().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'invert') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Invert().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'sepia') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Sepia().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'blink') {
		if (!args[1]) return message.channel.send('Missing Gif Link 1 and 2');
		if (!args[1].toLowerCase().includes('.gif'))
			return message.channel.send('Only Links Ending With .gif are Allowed!');
		if (!args[2]) return message.channel.send('Missing Gif Link 2');
		if (!args[2].toLowerCase().includes('.gif'))
			return message.channel.send('Only Links Ending With .gif are Allowed!');
		if (!args[3]) {
			let img = await new e.Blink().getImage(args[1], args[2]);
			let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
			return message.channel.send(attch);
		}
		if (!args[3].toLowerCase().includes('.gif'))
			return message.channel.send('Only Links Ending With .gif are Allowed!');
		let img = await new e.Blink().getImage(args[1], args[2], args[3]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		return message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'trigger') {
		if (!args[1]) return message.channel.send('Missing Gif Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send('Only Links Ending With .gif are Allowed!');
		let img = await new e.Triggered().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'ad') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Ad().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'affect') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Ad().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'batslap') {
		if (!args[1])
			return message.channel.send('Missing Png/Jpg/Jpeg Link 1 and 2');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		if (!args[2]) return message.channel.send('Missing Png/Jpg/Jpeg Link 2');
		if (!args[2].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Batslap().getImage(args[1], args[2]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'bed') {
		if (!args[1])
			return message.channel.send('Missing Png/Jpg/Jpeg Link 1 and 2');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		if (!args[2]) return message.channel.send('Missing Png/Jpg/Jpeg Link 2');
		if (!args[2].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Bed().getImage(args[1], args[2]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'bobross') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Bobross().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'confusedstonks') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.ConfusedStonk().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'delete') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Ad().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'discordblack') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.DiscordBlack().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'discordblue') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.DiscordBlue().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'doublestonk') {
		if (!args[1])
			return message.channel.send('Missing Png/Jpg/Jpeg Link 1 and 2');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		if (!args[2]) return message.channel.send('Missing Png/Jpg/Jpeg Link 2');
		if (!args[2].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.DoubleStonk().getImage(args[1], args[2]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'batslap') {
		if (!args[1])
			return message.channel.send('Missing Png/Jpg/Jpeg Link 1 and 2');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		if (!args[2]) return message.channel.send('Missing Png/Jpg/Jpeg Link 2');
		if (!args[2].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Batslap().getImage(args[1], args[2]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'facepalm') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Facepalm().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'hitler') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Hitler().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'jail') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Jail().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'karaba') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Karaba().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'kiss') {
		if (!args[1]) return message.channel.send('Missing Gif Link 1 and 2');
		if (!args[1].toLowerCase().includes('.gif'))
			return message.channel.send('Only Links Ending With .gif are Allowed!');
		if (!args[2]) return message.channel.send('Missing Gif Link 2');
		if (!args[2].toLowerCase().includes('.gif'))
			return message.channel.send('Only Links Ending With .gif are Allowed!');
		let img = await new e.Kiss().getImage(args[1], args[2]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		return message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'presentation') {
		if (!args[1]) return message.channel.send('Missing Text');
		if (args[1].length > 300)
			return message.channel.send('No More Than 300 Characters');
		let img = await new e.LisaPresentation().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'mms') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Mms().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'notstonk') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.NotStonk().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'podium') {
		if (!args[1])
			return message.channel.send('Missing Png/Jpg/Jpeg Link 1, 2 and 3');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		if (!args[2])
			return message.channel.send('Missing Png/Jpg/Jpeg Link 2 and 3');
		if (!args[2].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		if (!args[3]) return message.channel.send('Missing Png/Jpg/Jpeg Link 3');
		if (!args[3].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		if (!args[4]) return message.channel.send('Missing Podium Text 1, 2 and 3');
		if (args[4].length > 20)
			return message.channel.send('Podium Text Cannot Exceed 20 Characters');
		if (!args[5]) return message.channel.send('Missing Podium Text 2 and 3');
		if (args[5].length > 20)
			return message.channel.send('Podium Text Cannot Exceed 20 Characters');
		if (!args[6]) return message.channel.send('Missing Podium Text 3');
		if (args[6].length > 20)
			return message.channel.send('Podium Text Cannot Exceed 20 Characters');
		let img = await new e.Podium().getImage(
			args[1],
			args[2],
			args[3],
			args[4],
			args[5],
			args[6]
		);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'poutine') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Poutine().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'rip') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Rip().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'spank') {
		if (!args[1])
			return message.channel.send('Missing Png/Jpg/Jpeg Link 1 and 2');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		if (!args[2]) return message.channel.send('Missing Png/Jpg/Jpeg Link 2');
		if (!args[2].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Spank().getImage(args[1], args[2]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'stonks') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Stonk().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'tatoo') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Tatoo().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'thomas') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Thomas().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'trash') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Trash().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'circle') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		let img = await new e.Circle().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'wanted') {
		if (!args[1]) return message.channel.send('Missing Png/Jpg/Jpeg Link');
		if (!args[1].toLowerCase().includes('.png' || '.jpg' || '.jpeg'))
			return message.channel.send(
				'Only Links Ending With .png/.jpg/.jpeg are Allowed!'
			);
		if (!args[2])
			return message.channel.send(
				"You Haven't Provided a Symbol For The Currency"
			);
		let img = await new e.Wanted().getImage(args[1], args[2]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
	if (args[0].toLowerCase() == 'color') {
		if (args[1].length > 7)
			return message.channel.send(
				`Hex Characters Are Not Longer Than 7 Characters. They Start with #. Ex- #36ff00`
			);
		if (!args[1].startsWith('#'))
			return message.channel.send(`This is Not a Hex`);
		let img = await new e.Color().getImage(args[1]);
		let attch = new discord_js_1.MessageAttachment(img, 'Image.png');
		message.channel.send(attch);
	}
};
exports.run = run;
exports.name = 'image';
exports.category = 'Restricted';
exports.cooldown = 2000;
exports.description = 'This is a Developer Command';
exports.usage = 'img <type> <img link>';
exports.aliases = ['img'];
//# sourceMappingURL=Image.js.map
