const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env['token'];
//var mysql = require('mysql');
var date = new Date();
var month = date.getMonth();

bot.login(token);

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

//id steen: 671705704985395251

bot.on('message', msg => {

	if (msg.author.bot) {

	}
	else if (msg.guild === null) {
		//dm bericht, info versturen naar console omdat het kan.
		console.log("");
		console.log("dm bericht gekregen van: " + msg.author.username + "\nbericht is: " + msg.content);

	}

	else {
		let args = msg.content.slice(8).split(' ');
		/*if (msg.content.toLowerCase() === 'ric ping') {
      msg.reply('pong');
      //msg.channel.send('pong');
  
    } */
		if (msg.content.toLowerCase() === 'ric ping') {
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
			if (msg.guild.id === '816263795613761597') {
				//doolhof, de game! en shrek server 
					const helpEmbed = new Discord.MessageEmbed()
					.setAuthor('commands:')
					.setColor('#0011ff')
					.setDescription(
						'`ric help commands`\nvoor epic commands\n\n`ric help nsfw`\nvoor de geilste commands\n\n`rc help roles`\nvoor epic rollen'
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
					.setThumbnail(
						'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
					)
					.setTimestamp();
				msg.channel.send(helpEmbed2);
			}
		} else if (msg.content.toLowerCase() === 'ric help commands') {
			if (msg.guild.id === '828944339564232704') {
			const helpEmbedc = new Discord.MessageEmbed()
				.setAuthor('commands:')
				.setColor('#0011ff')
				.setDescription(
					'`ric ping`\nkrijg de reactie tijden van ricardo.\n\n`ric source web` \nsource code van de web versie\n\n `ric source psp` \n source code van de psp versie\n\n`ric source you`\nkrijg de code van ricardo zelf!\n\n`ric wiki psp` \nwiki van de psp versie\n\n`ric subreddit`\nsubreddit voor epic spel\n\n`ric invite` \ninvite voor epic server\n\n`ric game to play`\nricardo kiest een spel voor je uit.\n\n`ric hoe hoog ben ik`\naltijd handig om te weten\n\n`ric kill me`\nricardo regelt het wel\n\n`ric furry boy`\nping onze favoriete furry'
				)
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
					'`ric ping`\nkrijg de reactie tijden van ricardo.\n\n`ric source web` \nsource code van de web versie\n\n `ric source psp` \n source code van de psp versie\n\n`ric source you`\nkrijg de code van ricardo zelf!\n\n`ric wiki psp` \nwiki van de psp versie\n\n`ric subreddit`\nsubreddit voor epic spel\n\n`ric invite` \ninvite voor epic server\n\n`ric game to play`\nricardo kiest een spel voor je uit.\n\n`ric hoe hoog ben ik`\naltijd handig om te weten\n\n`ric kill me`\nricardo regelt het wel'
				)
				.setThumbnail(
					'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
				)
				.setTimestamp();
			msg.channel.send(helpEmbedc);
			}
		} else if (msg.content.toLowerCase() === 'ric help nsfw') {
			if (msg.channel.nsfw || msg.author.id === '671705704985395251') {
				msg.channel.send("nee.");
			}
			else {
			const helpEmbedn = new Discord.MessageEmbed()
				.setAuthor('commands:')
				.setColor('#0011ff')
				.setDescription(
					"`ric geil (nsfw)` \ngewoon geil\n\n `ric you've got that (NSFW)` \nook geil "
				)
				.setThumbnail(
					'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
				)
				.setTimestamp();
			msg.channel.send(helpEmbedn);
			}
		} else if (
			msg.content.toLowerCase() === 'ric help roles' &&
			msg.guild.id === '816263795613761597'
		) {
			const helpEmbedr = new Discord.MessageEmbed()
				.setAuthor('commands:')
				.setColor('#0011ff')
				.setDescription(
					'`ric update me origineel` \nkrijg updates van de originele versie\n\n `ric update me psp` \nkrijg psp updates\n\n`ric update me bot`\nkrijg updates van development van een epic bot\n\n`ric im a speedrunner`\nkrijg de speedrunner rol'
				)
				.setThumbnail(
					'https://cdn.discordapp.com/avatars/833605715771654174/56529ef670666520dcbf70e7a6e4b5ad.webp'
				)
				.setTimestamp();
			msg.channel.send(helpEmbedr);
		} 
		/*word niet meer gebruikt omdat ik geen remote database kon vinden.
		else if (msg.content.toLowerCase() === "ric leaderboard 1") {
			var con = mysql.createConnection({
  				host: "freedb.tech",
				user: "freedbtech_robinbouma",
				password: "Rbbo2005",
				database: "freedbtech_doolhofdegame"
			});
			con.connect(function(err) {
				if (err) throw err;
				var sql = "SELECT naam, scorejs, mobiel FROM score1 ORDER BY scorejs DESC";
				con.query(sql , function (err, result, fields) {
					if (err) throw err;
					console.log(result);
					msg.channel.send("naam		score		mobiel");
					//var numRows = result.length;
					namen = "";
					aantal = result.length;
						//msg.channel.send(result[i].naam + "    " + result[i].scorejs + "    " + result[i].mobiel);
						for (i = 0; i < result.length; i++) {
							namen = namen + result[i].naam + "\n";
						}
						
					
					const l1Embedr = new Discord.MessageEmbed()
					l1embedr.add_field(name="naam", value=namen, inline=True)
					//embed.add_field(name="score", value="undefined", inline=True)
					//embed.add_field(name="mobiel", value="undefined", inline=True)
					msg.channel.send(l1Embedr);
				});
			});

		}*/
		else if (msg.content.toLowerCase() === 'ric geil') {
			if (msg.author.id === '671705704985395251') {
					msg.channel.send("nee steen.");
			}
			else if (msg.channel.nsfw) {
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
			if (msg.author.id === '671705704985395251') {
					msg.channel.send("nee steen.");
			}
			else if (msg.channel.nsfw) {
				
					msg.channel.send('je heb het verkeerd gespeld.\nmaar nog wel:\n\nHEIL ricardo!!!');
									
			} else {
					msg.reply('dacht je nou echt dat je dit buiten een nsfw kanaal kan posten?');	
			}
		}
			
		else if (msg.content.toLowerCase() === 'ric geil pride' && month === 5) {
			if (msg.author.id === '671705704985395251') {
				msg.channel.send("nee steen");
			}
			else if (msg.channel.nsfw) {
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
			if (msg.author.id === '671705704985395251') {
				msg.channel.send("nee steen");
			}
			else if (msg.channel.nsfw) {
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
		}else if (msg.content.toLowerCase() === 'ric subreddit' || msg.content.toLowerCase() === 'ric reddit') {
			msg.channel.send(
				'join de subreddit: https://www.reddit.com/r/Doolhofdegame/'
			);
		} else if (msg.content.toLowerCase() === 'ric invite') {
			msg.channel.send('join deze epic server: https://discord.gg/JWz2u3Sauu');
		} else if (
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
		else if (msg.content.includes(" chad ") || msg.content.includes(" chad.") || msg.content.includes(" chad,")) {
			msg.reply("riep je mij? ik hoorde chad.")
		} else if (
			msg.content.toLowerCase() === 'chad' ||
			msg.content.toLowerCase() === 'chad.'
		) {
			msg.channel.send('riep je me?');
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
			
			
			bot.users.fetch('671705704985395251').then((user) => {
				user.send("hoi furry, je heb deze dm gekregen omdat " + msg.author.username + " het command hiervoor heeft gebruikt.").catch(console.error);
			});		
			msg.reply("command gerund, nu maar hopen dat hij aankomt.");	

			
		}
		else if (
			msg.content.toLowerCase() === 'geil' ||
			msg.content.toLowerCase() === 'geil.'
		) {
			if (msg.author.id === '671705704985395251') {
				msg.channel.send("nee steen, go to horny jail.");
			}
			else if (msg.author.bot) {
			} else {
				msg.channel.send(
					'heb je het over mij? waarschijnlijk wel. iedereen vind mij geil.'
				);
			}
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
		} else if (
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
				kill_rng = parseInt(Math.random() * 13 + 1);
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
			rng = parseInt(Math.random() * 500);
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
				"\nnickname is: " +
				msg.member.displayName +
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