const Discord = require('discord.js');
const bot = new Discord.Client();
//var mysql = require('mysql');
var date = new Date();
var moment = require("moment");
var month = date.getMonth();
var blockeduser;
var blockedsince = new Date();
var timenow;

bot.login(process.env['token']);

bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
	bot.user.setPresence({
		status: 'online',
		activity: {
			name: 'ric help',
			type: 'PLAYING'
		}
	});
});

bot.on('messageUpdate', (oldmsg, newmsg) => {
	console.log("message edited by ", newmsg.author.username, "in the channel ", newmsg.channel.name);
   if (newmsg.channel.name == "ja") {
			console.log("channel name is ja.");

			if (newmsg.content.includes("Nee") || newmsg.content.includes("nee") || newmsg.content.includes("nEE") || newmsg.content.includes("nEe") || newmsg.content.includes("neE") || newmsg.content.includes("NEE")) {

				blockeduser = newmsg.author.id;
				blockedsince = new Date();
				if (bot.users.cache.get(`${blockeduser}`) === undefined) {
					console.log("error, hij is undefined");
					//msg.reply("error. F.\nwaarde is undefined.\n\nals je hierover wil klagen moet je <@!690504015489925181> hebben");
				}

				else {
					bot.users.cache.get(blockeduser).send(`je heb nee gezegd in een ja chat, je kan over 300 seconden weer praten.`).catch(console.error);
					console.log("mute bericht verstuurd");
				}
				console.log("member deleted with id ", blockeduser, "\n", newmsg.author.id);
				newmsg.delete();

			}
			else if (!newmsg.content.includes("ja") && !newmsg.content.includes("JA") && !newmsg.content.includes("Ja")) {
				newmsg.delete();
				console.log("message without ja deleted");
			}
			
		}
});


bot.on('message', msg => {
	//let user = msg.author;
	var timenow = new Date();
	var secondsDiff = (timenow - blockedsince) / 1000;
	console.log(timenow);
	console.log(blockedsince);
	console.log(secondsDiff);
	console.log(blockeduser);
	if (msg.author.bot) {

	}
	else if (msg.guild === null) {
		//dm bericht, info versturen naar console omdat het kan.
		console.log("");
		console.log("dm bericht gekregen van: " + msg.author.username + "\nbericht is: " + msg.content);

	}
	else if (msg.author.id === blockeduser && secondsDiff < 300) {
		
		if (bot.users.cache.get(blockeduser) === undefined) {
			console.log("error, hij is undefined");
			//msg.reply("error. F.\nwaarde is undefined.\n\nals je hierover wil klagen moet je <@!690504015489925181> hebben");
		}
		else {
			bot.users.cache.get(blockeduser).send(`je kan nu geen berichten versturen omdat je nee heb gezegd, je kan over ${(300 - secondsDiff).toFixed(0)} seconden weer praten.`).catch(console.error);
			console.log("mute bericht verstuurd");
		}
		msg.delete();
	}

	else {
		let args = msg.content.slice(8).split(' ');
		if (msg.channel.name == "ja") {
			console.log("channel name is ja.");

			if (msg.content.includes("Nee") || msg.content.includes("nee") || msg.content.includes("nEE") || msg.content.includes("nEe") || msg.content.includes("neE") || msg.content.includes("NEE")) {

				blockeduser = msg.author.id;
				blockedsince = new Date();
				if (bot.users.cache.get(`${blockeduser}`) === undefined) {
					console.log("error, hij is undefined");
					//msg.reply("error. F.\nwaarde is undefined.\n\nals je hierover wil klagen moet je <@!690504015489925181> hebben");
				}

				else {
					bot.users.cache.get(blockeduser).send(`je heb nee gezegd in een ja chat, je kan over 300 seconden weer praten.`).catch(console.error);
					console.log("mute bericht verstuurd");
				}
				console.log("member deleted with id ", blockeduser, "\n", msg.author.username);
				msg.delete();

			}
			else if (!msg.content.includes("ja") && !msg.content.includes("JA") && !msg.content.includes("Ja")) {
				msg.delete();
				console.log("message without ja deleted");
			}
			
		}
		else if (msg.content.toLowerCase() === 'ric ping') {
			msg.channel.send('Loading data').then(async msg => {
				msg.delete();
				msg.channel.send(
					`pong!!!\n\nLatency is ${Date.now() -
					msg.createdTimestamp}ms. \nAPI Latency is ${Math.round(
						bot.ws.ping
					)}ms`
				);
			});
		} else if (msg.content.toLowerCase() === 'ric help') {
			if (msg.guild.id === '816263795613761597' || msg.guild.id === "865909031460405259") {
				//doolhof, de game! + witch game server 
				const helpEmbed = new Discord.MessageEmbed()
					.setAuthor('commands:')
					.setColor('#0011ff')
					.setDescription(
						'`ric help commands`\nvoor epic commands\n\n`ric help nsfw`\nvoor de geilste commands\n\n`ric help roles`\nvoor epic rollen'
					)
					.setFooter('ricardo is epic chad')
					.setThumbnail(
						'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
					)
					.setTimestamp();
				msg.channel.send(helpEmbed);
			} else {
				//alle andere servers waar geen rollen zijn.
				const helpEmbed2 = new Discord.MessageEmbed()
					.setAuthor('commands:')
					.setColor('#0011ff')
					.setDescription(
						'`ric help commands`\nvoor epic commands\n\n`ric help nsfw`\nvoor de geilste commands'
					)
					.setFooter('ricardo is epic chad')
					.setThumbnail(
						'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
					)
					.setTimestamp();
				msg.channel.send(helpEmbed2);
			}
		} else if (msg.content.toLowerCase() === 'ric help commands') {
			if (msg.guild.id === "828944339564232704") {
			const helpEmbedc = new Discord.MessageEmbed()
				.setAuthor('commands:')
				.setColor('#0011ff')
				.setDescription(
					'`ric ping`\nkrijg de reactie tijden van ricardo.\n\n`hi ric`\ngroet de chad\n\n`ric source web` \nsource code van de web versie\n\n `ric source psp` \n source code van de psp versie\n\n`ric source you`\nkrijg de code van ricardo zelf!\n\n`ric wiki psp` \nwiki van de psp versie\n\n`ric subreddit`\nsubreddit voor epic spel\n\n`ric invite` \ninvite voor epic server\n\n`ric game to play`\nricardo kiest een spel voor je uit.\n\n`ric hoe hoog ben ik`\naltijd handig om te weten\n\n`ric screensaver`\ndownload de epic ricardo screensaver!\n\n`ric baguette`\nBAGUETTE \n\n`ric roll`\nric will never give you up\n\n`ric kill me`\nricardo regelt het wel\n\n`ric-collect`\nkrijg info over een epic spel!\n\n`ric furry`\nping je favoriete furry (steen)\n\n`ric dm furry`\ndm je favoriete furry (steen)'
				)
				.setFooter('ricardo is epic chad')
				.setThumbnail(
					'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
				)
				.setTimestamp();
			msg.channel.send(helpEmbedc);
			}
			else {
				const helpEmbedc = new Discord.MessageEmbed()
				.setAuthor('commands:')
				.setColor('#0011ff')
				.setDescription(
					'`ric ping`\nkrijg de reactie tijden van ricardo.\n\n`hi ric`\ngroet de chad\n\n`ric source web` \nsource code van de web versie\n\n `ric source psp` \n source code van de psp versie\n\n`ric source you`\nkrijg de code van ricardo zelf!\n\n`ric wiki psp` \nwiki van de psp versie\n\n`ric subreddit`\nsubreddit voor epic spel\n\n`ric invite` \ninvite voor epic server\n\n`ric game to play`\nricardo kiest een spel voor je uit.\n\n`ric hoe hoog ben ik`\naltijd handig om te weten\n\n`ric screensaver`\ndownload de epic ricardo screensaver!\n\n`ric baguette`\nBAGUETTE \n\n`ric roll`\nric will never give you up\n\n`ric kill me`\nricardo regelt het wel\n\n`ric-collect`\nkrijg info over een epic spel!'
				)
				.setFooter('ricardo is epic chad')
				.setThumbnail(
					'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
				)
				.setTimestamp();
			msg.channel.send(helpEmbedc);
			}

		} else if (msg.content.toLowerCase() === 'ric help nsfw') {

			const helpEmbedn = new Discord.MessageEmbed()
				.setAuthor('commands:')
				.setColor('#0011ff')
				.setDescription(
					"`ric geil (nsfw)` \ngewoon geil\n\n `ric you've got that (NSFW)` \nook geil "
				)
				.setFooter('ricardo is epic chad')
				.setThumbnail(
					'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
				)
				.setTimestamp();
			msg.channel.send(helpEmbedn);

		} else if (
			msg.content.toLowerCase() === 'ric help roles') {
			if (msg.guild.id === "865909031460405259") {
				//witch game server
				const helpEmbedr = new Discord.MessageEmbed()
				.setAuthor('commands:')
				.setColor('#0011ff')
				.setDescription(
					'`ric me want tester`\nkrijg de tester rol'
				)
				.setFooter('ricardo is epic chad')
				.setThumbnail(
					'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
				)
				.setTimestamp();
			msg.channel.send(helpEmbedr);
			}
			else if (msg.guild.id === '816263795613761597') {
				//doolhof de game! server
			const helpEmbedr = new Discord.MessageEmbed()
				.setAuthor('commands:')
				.setColor('#0011ff')
				.setDescription(
					'`ric update me origineel` \nkrijg updates van de originele versie\n\n `ric update me psp` \nkrijg psp updates\n\n`ric update me bot`\nkrijg updates van development van een epic bot\n\n`ric im a speedrunner`\nkrijg de speedrunner rol'
				)
				.setFooter('ricardo is epic chad')
				.setThumbnail(
					'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
				)
				.setTimestamp();
			msg.channel.send(helpEmbedr);
			}
		}
		
		else if (msg.content.toLowerCase() === 'ric geil') {

			if (msg.channel.nsfw) {
				geil_rng = parseInt(Math.random() * 25);
				console.log("geil rng: " + geil_rng);
				console.log("");
				if (geil_rng === 7) {
					msg.channel.send("je moet niet altijd op mij geilen. \nvoor de verandering, geil eens op shrek:");
					msg.channel.send("https://cdn.discordapp.com/attachments/833624751208660992/850686268928557076/image0.jpg");
				}
				else {
					msg.channel.send('https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp');
				}
			} else {
				msg.reply('dacht je nou echt dat je dit buiten een nsfw kanaal kan posten?');
			}
		}
		else if (msg.content.toLowerCase() === 'ric heil') {
			console.log("HEIL ricardo!!!");
			console.log("");

			if (msg.channel.nsfw) {

				msg.channel.send('je heb het verkeerd gespeld.\nmaar nog wel:\n\nHEIL ricardo!!!');

			} else {
				msg.reply('dacht je nou echt dat je dit buiten een nsfw kanaal kan posten?');
			}
		}

		else if (msg.content.toLowerCase() === 'ric geil pride' && month === 5) {

			if (msg.channel.nsfw) {
				msg.channel.send(
					'https://cdn.discordapp.com/attachments/833624751208660992/850017122377138215/pixil-frame-0_4.png'
				);
			} else {
				msg.channel.send(
					'dacht je nou echt dat je dit buiten een nsfw kanaal kan posten?\n\nnou vooruit dan maar, omdat het juni is.'
				);
				msg.channel.send("https://cdn.discordapp.com/attachments/833624751208660992/850017122377138215/pixil-frame-0_4.png");
			}
		} else if (msg.content.toLowerCase() === "ric you've got that") {
			if (msg.channel.nsfw) {
				msg.channel.send(
					'https://tenor.com/view/flick-esfand-esfandtv-ricardo-milos-ricardo-flick-gif-13730968'
				);
			} else {
				msg.reply(
					'dacht je nou echt dat je dit buiten een nsfw kanaal kan posten?'
				);
			}
		} else if (msg.content.toLowerCase() === 'ric wiki psp') {
			msg.channel.send(
				'wiki voor de psp versie: https://github.com/robinbouma7/doolhof-de-game-psp/wiki'
			);
		} else if (msg.content.toLowerCase() === 'ric source psp') {
			msg.channel.send(
				'source code voor de psp versie: https://github.com/robinbouma7/doolhof-de-game-psp'
			);
		} else if (msg.content.toLowerCase() === 'ric source web') {
			msg.channel.send(
				'source code voor de web versie:  https://github.com/robinbouma7/doolhof_de_game.Ft.ricardo'
			);
		} else if (msg.content.toLowerCase() === 'ric source you') {
			msg.channel.send(
				'hier is mijn code:\nhttps://replit.com/@RobinBouma/ricardo-bot#index.js'
			);
		} else if (msg.content.toLowerCase() === 'ric subreddit' || msg.content.toLowerCase() === 'ric reddit') {
			msg.channel.send(
				'join de subreddit: https://www.reddit.com/r/Doolhofdegame/'
			);
		} else if (msg.content.toLowerCase() === 'ric invite') {
			msg.channel.send('join deze epic server: https://discord.gg/JWz2u3Sauu');
		}

		else if (msg.content.startsWith("ric join") || msg.content.startsWith('Ric join')) {
			if (msg.author.id === "690504015489925181" || msg.author.id === "291547913019195392") {


				let bericht = msg.content.slice(9).split(' ');
				if (bericht.length > 0) {

					let vc = bericht.join(' ');
					console.log("\nverbinden met vc met het id: " + vc);
					const channel = bot.channels.cache.get(`${vc}`);

					if (!channel) {
						msg.reply("dat kanaal bestaat niet eens.");
						return console.error("The channel does not exist!");

					}

					channel.join().then(connection => {
						// Yay, it worked!
						console.log(`Successfully connected to ${bot.channels.cache.get(vc).name}.`);
						msg.reply("succesvol verbonden met: " + bot.channels.cache.get(vc).name);
					}).catch(e => {

						// Oh no, it errored! Let's log it to console :)
						console.error(e);

					});

				}
				else {
					msg.reply('geen bericht verstuurd.');
				}
			}
			else {
				msg.reply("nee.");
			}
		}
		else if (msg.content.toLowerCase() === "ric leave") {
			if (msg.author.id === "690504015489925181" || msg.author.id === "291547913019195392") {


				if (!msg.guild.me.voice.channel) return msg.channel.send("I'm not in a voice channel you twat!");
				msg.guild.me.voice.channel.leave(); //Leave the voice channel
				//if (msg.guild.me.voiceChannel === undefined) {
				//	msg.reply("i'm not in a vc you twat!");
				//}
				//else {
				//msg.guild.me.voiceChannel.leave();

				//msg.reply("I have successfully left the voice channel!");
				//}
				// check if the bot is connected to a voice channel
			}
			else {
				msg.reply("nee.");
			}


		}
		else if (
			msg.content.toLowerCase() === 'epic chad' ||
			msg.content.toLowerCase() === 'epic chad.'
		) {
			msg.channel.send('dat ben ik!');
		} else if (msg.content.toLowerCase() === 'hi ric' ||
			msg.content.toLowerCase() === 'hi ric.'
		) {

			console.log("nickname: " + msg.member.displayName);
			msg.channel.send('Hi ' + msg.member.displayName + ".");
		}
		else if (msg.content.includes("chad") || msg.content.includes("Chad")) {
			msg.reply("riep je mij? ik hoorde chad.")
		} else if (
			msg.content.toLowerCase() === 'chad' ||
			msg.content.toLowerCase() === 'chad.'
		) {
			msg.reply('riep je me?');
		} else if (
			msg.content.toLowerCase() === 'yes' ||
			msg.content.toLowerCase() === 'yes.'
		) {
			if (msg.author.bot) {
			} else {
				msg.channel.send('yes');
			}
		} else if (
			msg.content.toLowerCase() === 'pog' ||
			msg.content.toLowerCase() === 'pog.' ||
			msg.content.toLowerCase() === 'pog!'
		) {
			if (msg.author.bot) {
			} else {
				msg.channel.send('yes, verry poggers indeed.');
			}
		} else if (
			msg.content.toLowerCase() === 'epic' ||
			msg.content.toLowerCase() === 'epic.'
		) {
			if (msg.author.bot) {
			} else {
				msg.channel.send('epic');
			}
		} else if (
			msg.content.toLowerCase() === 'ric furry' ||
			msg.content.toLowerCase() === 'ric furry boy'
		) {
			msg.channel.send('<@&847800674879144006>\n\nhoi <@671705704985395251>');
		}
		else if (msg.content.toLowerCase() === "ric dm furry" || msg.content.toLowerCase() === "ric dm furry boy") {
			
			if (bot.users.cache.get("671705704985395251") === undefined) {
				console.log("error, hij is undefined");
				msg.reply("error. F.\nwaarde is undefined.\n\nals je hierover wil klagen moet je <@!690504015489925181> hebben");
			}
			else {
				bot.users.cache.get("671705704985395251").send(`hoi furry, je heb deze dm gekregen omdat ${msg.author.username} het command hiervoor heeft gebruikt in de server ${msg.guild.name}.\n\nveel plezier ermee!`).catch(console.error);
				msg.reply("dm verstuurd, noice.");
				console.log("dm succesvol verstuur naar furry.");
			}

		}

		else if (msg.content.toLowerCase() === "ric roll") {

			//id steen: 671705704985395251
			userid = msg.author.id;
			/*bot.users.fetch('690504015489925181').then((user) => {
				user.send("hoi furry, je heb deze dm gekregen omdat " + msg.author.username + " het command hiervoor heeft gebruikt in de server " + msg.guild.name + ".").catch(console.error);
			});	*/
			if (bot.users.cache.get(`${userid}`) === undefined) {
				console.log("error, rickroll undefined.\ngrote F.");
				msg.reply("error. je heb misschien de bot geblocked");
			}
			else {
				bot.users.cache.get(`${userid}`).send("we're no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\n\nI just wanna tell you how I'm feeling\nGotta make you understand\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nWe've known each other for so long\nYour heart's been aching, but\nYou're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\n\nAnd if you ask me how I'm feeling\nDon't tell me you're too blind to see\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\n(Ooh, give you up)\n(Ooh, give you up)\nNever gonna give, never gonna give\n(Give you up)\nNever gonna give, never gonna give\n(Give you up)\n\nWe've known each other for so long\nYour heart's been aching, but\nYou're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\n\nI just wanna tell you how I'm feeling\nGotta make you understand\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you").catch(console.error);
				msg.reply("command gerund, kijk maar eens in de dm's.");
				console.log("rickroll verstuurd naar " + msg.member.displayName);
			}

		}

		else if (msg.content.startsWith('ric-rol') && (msg.author.id === "690504015489925181" || msg.author.id === "291547913019195392")) {
			if (msg.mentions.users.size) {
				const taggedUser = msg.mentions.users.first();
				//taggedUser.id
				if (bot.users.cache.get(`${taggedUser.id}`) === undefined) {
					console.log("error, rickroll undefined.\ngrote F.");
					msg.reply("error. je heb misschien de bot geblocked");
				}
				else {
					bot.users.cache.get(`${taggedUser.id}`).send("we're no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\n\nI just wanna tell you how I'm feeling\nGotta make you understand\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nWe've known each other for so long\nYour heart's been aching, but\nYou're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\n\nAnd if you ask me how I'm feeling\nDon't tell me you're too blind to see\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\n(Ooh, give you up)\n(Ooh, give you up)\nNever gonna give, never gonna give\n(Give you up)\nNever gonna give, never gonna give\n(Give you up)\n\nWe've known each other for so long\nYour heart's been aching, but\nYou're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\n\nI just wanna tell you how I'm feeling\nGotta make you understand\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you").catch(console.error);
					msg.reply("rickroll verstuurd, epic.");
					console.log("rickroll verstuurd naar " + taggedUser.username);
				}
			}
			else {
				msg.reply('Please tag a valid user!');
			}
		}

		else if (msg.content.toLowerCase() === "ric baguette") {
			const breadfront = bot.emojis.cache.get('854650231157162015');
			const breadmid = bot.emojis.cache.get('854650155328471060');
			const breadend = bot.emojis.cache.get('854650191876587520');

			msg.channel.send(` ${breadfront} ${breadmid} ${breadmid} ${breadmid} ${breadmid} ${breadend}`);
			msg.channel.send("BAGUETTE");
		}
		else if (
			msg.content.toLowerCase() === 'geil' ||
			msg.content.toLowerCase() === 'geil.'
		) {
			msg.channel.send(
				'heb je het over mij? waarschijnlijk wel. iedereen vind mij geil.'
			);

		} else if (msg.content.toLowerCase() === 'f') {
			if (msg.author.bot) {
			} else {
				msg.channel.send('F');
			}
		} else if (
			msg.content.toLowerCase() === 'nice' ||
			msg.content.toLowerCase() === 'nice.'
		) {
			if (msg.author.bot) {
			} else {
				msg.channel.send('noice');
			}
		} else if (
			msg.content.toLowerCase() === 'noice' ||
			msg.content.toLowerCase() === 'noice.'
		) {
			if (msg.author.bot) {
			} else {
				msg.channel.send('nice');
			}
		} else if (msg.content.toLowerCase() === 'ric game to play') {
			msg.channel.send(
				'dit is wel een leuk spel: https://www.doolhofdegame.ml/index.php'
			);
		} else if (msg.content.toLowerCase() === 'ric screensaver') {
			msg.channel.send(
				'Download de epic ricardo screensaver hier:\n https://robinbouma.itch.io/ricardo-screensaver\n\nhij is voor windows, linux, android en psp!!'
			);
		}
		else if (msg.content.toLowerCase() === 'ric-collect' ||
		msg.content.toLowerCase() === 'ric re-collect') {
			msg.channel.send(
				'epic spel gemaakt door <@690504015489925181> en <@703691110261981335>.\n\nmeer info? join de discord server: https://discord.gg/FcSEkEF78n'
			);
		}  else if (
			msg.content.toLowerCase() === 'ric hoe hoog ben ik' ||
			msg.content.toLowerCase() === 'ric hoe hoog ben ik?'
		) {
			msg.channel.send(
				'hier kan je het berekenen: \nhttps://www.ikwilgraagmijnlengtewetenensnelgraagaub.ml/index.php \n\nje kan de tool nu ook downloaden voor desktop op: https://robinbouma.itch.io/lengte-berekenings-tool'
			);
		}
		else if (msg.content.toLowerCase() == "ric kill me") {

			if (msg.author.id === 671705704985395251) {
				msg.channel.send("nee steen, te eng voor jou.");
			}
			else {
				kill_rng = parseInt(Math.random() * 14 + 1);
				console.log('');
				console.log(`kill rng: ` + kill_rng);
				if (kill_rng === 1) {
					msg.channel.send(
						"i won't, you've got so much to live for!\n\n\nnah, just kidding.\nhere, take this exploding grenade."
					);
				}
				if (kill_rng === 2) {
					msg.channel.send(
						'you know the rules, \nand so do I!!!\n\nsay goodbye!!!\n(gunshots)'
					);
				}
				if (kill_rng === 3) {
					msg.channel.send(
						"ok, i'll get you mom\n\nshe can easily crush you with her weight."
					);
				}
				if (kill_rng === 4) {
					msg.channel.send('bonk');
				}
				if (kill_rng === 5) {
					msg.channel.send('How about no');
				}
				if (kill_rng === 6) {
					msg.channel.send(
						'you hate ricardo??\n\nthen you must die!!\n\n(stab sounds)'
					);
				}
				if (kill_rng === 7) {
					msg.channel.send(
						'look, there is steen!\n\nhaha! now you have seen him you will die!!!!'
					);
				}
				if (kill_rng === 8) {
					msg.channel.send('pov: you dont like doolhof,\nde game! ft. ricardo', {
						files: [
							'https://media.discordapp.net/attachments/833624751208660992/834771188831354920/gun.png?width=411&height=473'
						]
					});
				}
				if (kill_rng === 9) {
					msg.channel.send('I won’t, you’ll do it yourself eventually.');
				}
				if (kill_rng === 10) {
					msg.channel.send(
						'You’re not worth being killed by me\n\nTHE ALMIHTY RICARDO!!!'
					);
				}
				if (kill_rng === 11) {
					msg.channel.send('Alright, what should I play at your funeral?');
				}
				if (kill_rng === 12) {
					msg.channel.send('I won’t cus you didn’t say please');
				}
				if (kill_rng === 13) {
					msg.channel.send("https://tenor.com/view/ricardo-milos-gun-aim-gif-15682110");
				}
				if (kill_rng === 14) {
					msg.channel.send("", {
						files: [
							'https://cdn.discordapp.com/attachments/821350604680200213/864201902517911583/video0.mp4'
						]
					});
				}
			}
		} else if (
			msg.content.toLowerCase() === 'ric kill me please' ||
			msg.content.toLowerCase() === 'ric kill me pls'
		) {
			if (msg.author.bot) {
			} else {
				msg.channel.send('no.');
			}
		} else if (msg.content.toLowerCase() === 'e') {
			if (msg.author.bot) {
			} else {
				rng_E = parseInt(Math.random() * 100);
				console.log('');
				console.log(`E rng: ` + rng_E);
				if (rng_E === 69) {
					msg.channel.send(
						'https://cdn.discordapp.com/attachments/833624751208660992/834053747411517440/WhatsApp_Video_2021-04-20_at_15.09.02_1.mp4'
					);
				} else {
					msg.channel.send('E');
				}
			}
		} else if (msg.content.toLowerCase() === 'ric i want you') {
			msg.channel.send(
				'https://discord.com/api/oauth2/authorize?client_id=833706458923008010&permissions=2617764983&scope=bot'
			);
		}
		else if (msg.content.toLowerCase() === 'ric what can you do' && msg.author.id === "690504015489925181") {

			msg.reply(
				'mijn permissies op deze server zijn versturd naar de console.'
			);

			//console.log("\n" + msg.guild.me.hasPermission(""));
			console.log("\nserver: " + msg.guild.name);
			console.log("overall id: " + msg.guild.me.permissions);
			console.log("\nadministrator: " + msg.guild.me.hasPermission("ADMINISTRATOR"));
			console.log("create instant invite: " + msg.guild.me.hasPermission("CREATE_INSTANT_INVITE"));
			console.log("kick members: " + msg.guild.me.hasPermission("KICK_MEMBERS"));
			console.log("ban members: " + msg.guild.me.hasPermission("BAN_MEMBERS"));
			console.log("manage channels: " + msg.guild.me.hasPermission("MANAGE_CHANNELS"));
			console.log("manage guild: " + msg.guild.me.hasPermission("MANAGE_GUILD"));
			console.log("add reactions: " + msg.guild.me.hasPermission("ADD_REACTIONS"));
			console.log("view audit log: " + msg.guild.me.hasPermission("VIEW_AUDIT_LOG"));
			console.log("priority speaker: " + msg.guild.me.hasPermission("PRIORITY_SPEAKER"));
			console.log("stream: " + msg.guild.me.hasPermission("STREAM"));
			console.log("vieuw channel: " + msg.guild.me.hasPermission("VIEW_CHANNEL"));
			console.log("send messages: " + msg.guild.me.hasPermission("SEND_MESSAGES"));
			console.log("send tts messages: " + msg.guild.me.hasPermission("SEND_TTS_MESSAGES"));
			console.log("manage messages: " + msg.guild.me.hasPermission("MANAGE_MESSAGES"));
			console.log("embed links: " + msg.guild.me.hasPermission("EMBED_LINKS"));
			console.log("attach files: " + msg.guild.me.hasPermission("ATTACH_FILES"));
			console.log("read message history: " + msg.guild.me.hasPermission("READ_MESSAGE_HISTORY"));
			console.log("mention everyone: " + msg.guild.me.hasPermission("MENTION_EVERYONE"));
			console.log("use external emoji's: " + msg.guild.me.hasPermission("USE_EXTERNAL_EMOJIS"));
			console.log("view guild insights: " + msg.guild.me.hasPermission("VIEW_GUILD_INSIGHTS"));
			console.log("connect: " + msg.guild.me.hasPermission("CONNECT"));
			console.log("speak: " + msg.guild.me.hasPermission("SPEAK"));
			console.log("mute members: " + msg.guild.me.hasPermission("MUTE_MEMBERS"));
			console.log("deafen members: " + msg.guild.me.hasPermission("MUTE_MEMBERS"));
			console.log("move members: " + msg.guild.me.hasPermission("MOVE_MEMBERS"));
			console.log("use vad: " + msg.guild.me.hasPermission("USE_VAD"));
			console.log("change nickname: " + msg.guild.me.hasPermission("CHANGE_NICKNAME"));
			console.log("manage nicknames: " + msg.guild.me.hasPermission("MANAGE_NICKNAMES"));
			console.log("manage roles: " + msg.guild.me.hasPermission("MANAGE_ROLES"));
			console.log("manage webhooks: " + msg.guild.me.hasPermission("MANAGE_WEBHOOKS"));
			console.log("manage emoji's: " + msg.guild.me.hasPermission("MANAGE_EMOJIS"));
			//console.log("use slash commands: " + msg.guild.me.hasPermission("USE_SLASH_COMMANDS"));
			//console.log("request to speak: " + msg.guild.me.hasPermission("REQUEST_TO_SPEAK"));
			//console.log("manage threads: " + msg.guild.me.hasPermission("MANAGE_THREADS"));
			//console.log("use public threads: " + msg.guild.me.hasPermission("USE_PUBLIC_THREADS"));
			//console.log("use private threads: " + msg.guild.me.hasPermission("USE_PRIVATE_THREADS"));
			console.log("");

		}
		else if (msg.content.toLowerCase() === 'ric i want you mod') {
			msg.channel.send(
				'https://discord.com/api/oauth2/authorize?client_id=833706458923008010&permissions=8&scope=bot'
			);
		} else if (msg.content.toLowerCase() === 'ric update me psp') {
			if (msg.guild.id === '816263795613761597') {
				let pspupdates = msg.guild.roles.cache.get('833624859464433684');

				if (msg.member.roles.cache.has('833624859464433684')) {
					let member = msg.member;
					member.roles.remove(pspupdates).catch(console.error);
					msg.reply('je krijg nu geen updates meer voor de psp versie.');
					console.log(`psp rol weggenomen van: ` + msg.author.username);
				} else {
					let member = msg.member;
					member.roles.add(pspupdates).catch(console.error);
					msg.reply('je krijg nu updates voor de psp versie!');
					console.log(`psp rol toegevoegd aan: ` + msg.author.username);
				}
			} else {
				//niks
			}
		} else if (msg.content.toLowerCase() === 'ric update me origineel') {
			if (msg.guild.id === '816263795613761597') {
				let webupdates = msg.guild.roles.cache.get('833625075017449482');

				if (msg.member.roles.cache.has('833625075017449482')) {
					let member = msg.member;
					member.roles.remove(webupdates).catch(console.error);
					msg.reply('je krijg nu geen updates meer voor de web versie.');
					console.log('');
					console.log(`web rol weggenomen van: ` + msg.author.username);
				} else {
					let member = msg.member;
					member.roles.add(webupdates).catch(console.error);
					msg.reply('je krijg nu updates voor de web versie!');
					console.log('');
					console.log(`web rol toegevoegd aan: ` + msg.author.username);
				}
			} else {
				//niks
			}
		} else if (msg.content.toLowerCase() === 'ric update me bot') {
			if (msg.guild.id === '816263795613761597') {
				let botupdates = msg.guild.roles.cache.get('838706522706935830');

				if (msg.member.roles.cache.has('838706522706935830')) {
					let member = msg.member;
					member.roles.remove(botupdates).catch(console.error);
					msg.reply('je word niet meer gepinged bij updates van de bot.');
					console.log('');
					console.log(`bot rol weggenomen van: ` + msg.author.username);
				} else {
					let member = msg.member;
					member.roles.add(botupdates).catch(console.error);
					msg.reply('je word nu gepinged bij updates van de bot.');
					console.log('');
					console.log(`bot rol toegevoegd aan: ` + msg.author.username);
				}
			} else {
				//niks
			}
		} else if (
			msg.content.toLowerCase() === 'ric im a speedrunner' ||
			msg.content.toLowerCase() === "ric i'm a speedrunner"
		) {
			if (msg.guild.id === '816263795613761597') {
				let speedrunner = msg.guild.roles.cache.get('838707590691160084');

				if (msg.member.roles.cache.has('838707590691160084')) {
					let member = msg.member;
					member.roles.remove(speedrunner).catch(console.error);
					msg.reply(
						'je ben nu geen epic doolhof, de game! ft. ricardo speedrunner meer.'
					);
					console.log('');
					console.log(`speedrunner rol weggenomen van: ` + msg.author.username);
				} else {
					let member = msg.member;
					member.roles.add(speedrunner).catch(console.error);
					msg.reply(
						'je ben nu een epic doolhof, de game! ft. ricardo speedrunner.'
					);
					console.log('');
					console.log(`speedrunner rol toegevoegd aan: ` + msg.author.username);
				}
			} else {
				//niks
			}
		}
		else if (
			msg.content.toLowerCase() === 'ric me want tester' ||
			msg.content.toLowerCase() === "ric me want test"
		) {
			if (msg.guild.id === '865909031460405259') {
				let speedrunner = msg.guild.roles.cache.get('866031485123166249');

				if (msg.member.roles.cache.has('866031485123166249')) {
					let member = msg.member;
					member.roles.remove(speedrunner).catch(console.error);
					msg.reply(
						'you not test now'
					);
					console.log('');
					console.log(`tester rol weggenomen van: ` + msg.author.username);
				} else {
					let member = msg.member;
					member.roles.add(speedrunner).catch(console.error);
					msg.reply(
						'you test now.'
					);
					console.log('');
					console.log(`tester rol toegevoegd aan: ` + msg.author.username);
				}
			} else {
				//niks
			}
		}
		else if (
			msg.content.startsWith('ric rol') || msg.content.startsWith('Ric rol') && msg.author.id === "690504015489925181") {
			if (args.length > 0) {
				let roleName = args.join(' ');
				let role = msg.guild.roles.cache.find(x => x.name === roleName);
				if (!role) {
					// Role doesn't exist, safe to create
					msg.guild.roles.create({
						data: {
							name: args.join(' '),
							color: 'BLUE',
						},
						reason: 'would be funny',
					})
						.then(console.log("rol toegevoegd, naam: " + args.join(' ')))
						.catch(console.error);
				} else {
					// Role exists
					msg.channel.send("rol bestaat al.");
					console.log("rol bestaat al: " + roleName)
				}

			}
			else {
				msg.reply('geen bericht verstuurd.');
			}
		}
		else if (
			msg.content.startsWith('ric say') ||
			msg.content.startsWith('Ric say')
		) {
			if (args.join(' ').length > 0) {
				if (args.join(' ') === "i'm gay" || args.join(' ') === "im gay") {
					msg.reply("we know.");
				}
				else {
					msg.channel.send(args.join(' '));
				}

			}
			else {
				msg.reply('probeer het nu nog eens en verstuur dan wel een bericht.');
			}
		} else if (msg.content.toLowerCase() == 'ric uptime') {
			msg.channel.send(
				'hier han je dat zien: https://stats.uptimerobot.com/50lLQI07jv/788037513'
			);
		} else {
			rng = parseInt(Math.random() * 1000);
			console.log('');
			console.log('message was not a command.\ncontent of the message is:\n\n' + msg.content +
				'\n\nricroll is bij 69.\nde rng bij dit bericht is: ' +
				rng);

			//allemaal info over bijna elk bricht printen naar console. gewoon omdat het kan.

			//comment want 1 rickroll is genoeg en deze is best slecht.
			/*if (rng === 369) {
				if (msg.author.bot || msg.channel.name === 'announcements') {
				} else {
					msg.channel.send(
						'@everyone schokkend nieuws: https://www.latlmes.com/breaking/doolhof-de-game-development-stopt-1'
					);
					console.log('');
					console.log('rr2  nice');
				}

				

			}*/
			if (rng === 69) {
				if (msg.author.bot) {

				} else {
					//rickroll hieronder kostte erg veel moeite, moest alle enters vervangen met \n
					msg.channel.send("@everyone \nwe're no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\n\nI just wanna tell you how I'm feeling\nGotta make you understand\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nWe've known each other for so long\nYour heart's been aching, but\nYou're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\n\nAnd if you ask me how I'm feeling\nDon't tell me you're too blind to see\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\n(Ooh, give you up)\n(Ooh, give you up)\nNever gonna give, never gonna give\n(Give you up)\nNever gonna give, never gonna give\n(Give you up)\n\nWe've known each other for so long\nYour heart's been aching, but\nYou're too shy to say it\nInside, we both know what's been going on\nWe know the game and we're gonna play it\n\nI just wanna tell you how I'm feeling\nGotta make you understand\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you");
					console.log("\nricroll, just how i raised him.");
				}
			} else if (
				msg.content.startsWith('ric ') ||
				msg.content.startsWith('Ric ') ||
				msg.content.toLowerCase() === 'ric'
			) {
				msg.channel.send(
					'dit command bestaat niet, controleer of je het niet verkeerd heb gespeld. \ngebruik het command "ric help" voor alle commands.'
				);
			} else {
			}
		}
		console.log("");
		console.log(
			'channel: ' +
			msg.channel.name +
			'\nserver: ' +
			msg.guild.name +
			'\nbot: ' +
			msg.author.bot +
			'\nverstuurd door: ' +
			msg.author.username +
			'\ntijd: ' +
			msg.createdAt.toLocaleTimeString('nl-NL', {
				timeZone: 'europe/amsterdam',
				hour12: false
			}) +
			'\ndag: ' +
			msg.createdAt.toLocaleDateString('nl-NL', {
				timeZone: 'europe/amsterdam',
				hour12: false
			}) +
			"\n"
		);


		/*else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }*/
	}
});

const http = require('http');
const server = http.createServer((req, res) => {
	res.writeHead(200);
	res.end(
		'bot online\n\ninvite link:\nhttps://discord.com/api/oauth2/authorize?client_id=833706458923008010&permissions=2617764983&scope=bot'
	);
});
server.listen(3000);
