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
exports.Bot = void 0;
const consola_1 = __importDefault(require('consola'));
const discord_js_1 = require('discord.js');
const glob_1 = __importDefault(require('glob'));
const util_1 = require('util');
const zapmongo_1 = require('zapmongo');
const globPromise = util_1.promisify(glob_1.default);
class Bot extends discord_js_1.Client {
	constructor() {
		super({
			ws: { intents: discord_js_1.Intents.ALL },
			messageCacheLifetime: 180,
			messageCacheMaxSize: 200,
			messageEditHistoryMaxSize: 200,
			messageSweepInterval: 180,
		});
		this.logger = consola_1.default;
		this.commands = new discord_js_1.Collection();
		this.aliases = new discord_js_1.Collection();
		this.events = new discord_js_1.Collection();
		this.cooldowns = new discord_js_1.Collection();
		this.categories = new Set();
		this.description = new Set();
		this.usage = new Set();
	}
	async start(config) {
		this.config = config;
		this.login(config.token);
		const commandFiles = await globPromise(
			`${__dirname}/../Commands/**/*{.ts,.js}`
		);
		commandFiles.map(async (value) => {
			const file = await Promise.resolve().then(() =>
				__importStar(require(value))
			);
			this.commands.set(file.name, {
				cooldown: 1000,
				...file,
			});
			this.commands.set(file.name, file);
			this.categories.add(file.category);
			if (file.aliases?.length) {
				file.aliases.map((value) => this.aliases.set(value, file.name));
			}
		});
		const eventFiles = await globPromise(
			`${__dirname}/../Events/**/*{.ts,.js}`
		);
		eventFiles.map(async (value) => {
			const file = await Promise.resolve().then(() =>
				__importStar(require(value))
			);
			this.events.set(file.name, file);
			this.on(file.name, file.run.bind(null, this));
		});
		this.db = new zapmongo_1.Database({
			mongoURI: this.config.mongoURI,
			schemas: [
				{
					name: 'guildconfig',
					data: {
						Guild: String,
						Prefix: String,
						Muterole: String,
						//Commands
						Avatar: String,
						Aww: String,
						Meme: String,
						Ad: String,
						Affect: String,
						Beautiful: String,
						Bed: String,
						Blink: String,
						Blur: String,
						Gay: String,
						Greyscale: String,
						Invert: String,
						Slap: String,
						Spank: String,
						Trigger: String,
						Netiquettes: String,
						Serverinfo: String,
						Userinfo: String,
						Ban: String,
						Kick: String,
						Mute: String,
						Muterolecmd: String,
						Purge: String,
						Unban: String,
						Unmute: String,
						Confusedstonks: String,
						Discordblack: String,
						Discordblue: String,
						Stonks: String,
						Doublestonks: String,
						Slowmode: String,
					},
				},
				{
					name: 'dev',
					data: {
						ID: String,
						Maintenance: String,
					},
				},
			],
		});
	}
	embed(options, message) {
		return new discord_js_1.MessageEmbed({ ...options, color: 'RANDOM' })
			.setTimestamp()
			.setFooter(
				message.author.username,
				message.author.displayAvatarURL({ dynamic: true, format: 'png' })
			);
	}
}
exports.Bot = Bot;
//# sourceMappingURL=Client.js.map
