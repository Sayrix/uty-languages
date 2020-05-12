const config = require('../config.json'),
prefix = config.prefix;

const languageData = {
//Time
    ONE_DAY: "a day",
    DAYS: (hijfsdg) => `${hijfsdg}j`,
    ONE_HOUR: "an hour",
    HOURS: (sfdqe) => `${sfdqe}h`,
    ONE_MINUTE : "a minute",
    MINUTES: (mplas) => `${mplas}m`,
    ONE_SECOND: "a second",
    SECONDS: (fsdko) => `${fsdko}s`,

//Permissions ERROR
    ERRORPERMSTITLE: "Permission Error !",
    ERRORPERMS: (opp) => `You don't have the permission \`${opp}\`. You must have it in order to execute the command.`,

//music
    VOLUME_MAX: (okbooq) => `Volume must be between 0 and ${okbooq}!`,
    VOLUME_SUCCESS: (gsrok) => `Volume has been set to **${gsrok}%**!\n:warning: If the volume goes over to 100%, it might damage your audio peripherals and your hearing :warning:`,
    VOLUME_NAN: "Given Volume isn't a number.!",
    NP_ERR_NO_DESC: "**No description**",
    RESUME_SUCCESS: "▶️ Music resumed.",
    PAUSE_SUCCESS: "⏸️ Music paused.",
    QUEUE_TITLE: `Playlist`,
    PLAY_ERR_CANT_JOIN: `<:no:625395798703603752> I don't have permisions to enter this channel !`,
    PLAY_ERR_NO_SONG: `<:no:625395798703603752> No more music in queue !`,
    PLAY_ADDED_TO_QUEUE: (pmkoz) => `🎵 ${pmkoz} has been added to the queue !`,
    PLAY_SEARCH: "Please select a value between 1 and 10 to selct the music.",
    PLAY_ERR_NO_NAME: `<:no:625395798703603752> Please enter a video name to search.`,
    PLAY_ERR_VOICE_CHANNEL: `<:no:625395798703603752> You must be connected to a voice channel.`,
    PLAY_ERR_PERMS: `<:no:625395798703603752> An error occured. Either I can't connect to the channel, either i can't speak in it. Please verify my permissions.`,
    PLAY_ERR_TIMEOUT: `⏳ Time elapsed, please redo the command !`,
    PLAY_ERR_NOT_FOUND: `<:no:625395798703603752> No result on Youtube !`,
    PLAY_ERR_NOT_PLAYING: `<:no:625395798703603752> No music playing !`,
    PLAY_PLAYING_TITLE: "Now Playing",
    PLAY_HEADINGS: [
        `Title`,
        `Author`,
        `Duration`,
        `Search`,
        `Creation`,
        `Description`,
        `**and more...**`
    ],
    PLAY_SUCCESS: (trdfg) => `🎵 \`${trdfg}\` is now playing...`,
    PLAY_ADDED_TO_QUEUE: (plkjkl) => `🎵 \`${plkjkl}\` added to the queue.`,
    PLAY_ERR_NO_NAME: `<:no:625395798703603752> Please enter a video name to search !`,
    STOP_TITLE: `Stop music`,
	STOP_CONTENT: (pmlok) => `Stop music\nVote : ${pmlok}\nReact with 👍 to stop the music !`,
    STOP_CONTENT_COMPLETE: "Music stoped !",
    SKIP_TITLE: "Skip to next music",
	SKIP_CONTENT: (fsdjk, faoq, pmqds) => `Skip music : \`${fsdjk}\`\nVote : ${faoq}/${pmqds}\nReact with 👍 to skip to the next music !`,
	SKIP_CONTENT_COMPLETE: (dlqsm) => `Music skiped ! Now playing : \`${dlqsm}\``,
	SKIP_ERR_NO_SONG: `<:no:625395798703603752> No more music in queue !`,

    ERR_COMMAND_DISABLED: `<:no:625395798703603752> This command is disabled !`,

    WEATHER_HUMIDI: "Humidity :",

    WEATHER_VENT: "Winds:",

    WEATHER_TEMPTWO: "Felt temperatures:",

    WEATHER_CELCIUS: "°C",

    WEATHER_TEMPERATURE: "Temperature :",

    WEATHER_ZONE: "Zone :",

    WEATHER_LOCATION: "Place :",

    WEATHER_NOCITY: "<:no:625395798703603752> No place found.",

    WEATHER_SYNTAX: `Syntax : \`${prefix}weather <Ville>\`\nE.g. \`${prefix}weather Agen\``,

    SUGGEST: "Suggestion :",

    SUGGEST_AUTHOR: "Suggestion of :",

    SUGGEST_SYNTAX: `Syntax : \`${prefix}suggest <Suggestion>\`\nE.g. \`${prefix}suggest do that....\` `,

//GIVEAWAY
    GAW_SYNTAX: (trf) => `Syntax : \`${trf}gaw <time> <number of winners> <prize>\`\nE.g. \`${trf}gaw 7d 1 Premium Uty\``,
    GIVEAWAY: "🎉 **GIVEAWAY** 🎉",
    GIVEAWAY_ENDED: "**GIVEAWAY ENDED**",
    GIVEAWAY_REMAINING: "Time remaining : **{duration}**",
    GAW_PARTICIPATE: (olka) => `React with 🎉 to participate!\nHosted by **${olka}**`,
    GAW_WIN: "🎉Congratulations {winners} ! You won **{prize}**!",
    GAW_FOOTER: "Giveaways",
    GAW_NOWIN: "Giveaway canceled, no valid participation.",
    GAW_WINNERS: "Winner(s)",
    GAW_ENDEDAT: "Ended",
    GAW_SECONDS: "seconds",
    GAW_MINUTES: "minutes",
    GAW_HOURS: "hours",
    GAW_DAYS: "days",

    ANNONCE_SYNTAX: `Syntax : \`${prefix}annonce <your announce>\`\nE.g. \`${prefix}annonce The V2.5 is out!\``, //Might edit later

    ASCII_SYNTAX: `Syntax : \`${prefix}ascii <Text>\`\nE.g. \`${prefix}ascii UTY\``,

    ERROR_GOODBYE: "<:warn:625395797357363211> An error occured : I couldn't send the goodbye message because I didn't find the specified channel.",

    ERROR_WELCOME: "<:warn:625395797357363211> An error occured : I couldn't send the welcome message because I didn't find the specified channel.",

    ERROR_AUTOROLE: "<:warn:625395797357363211> An error occured : I couldn't add the autorole because I didn't find the specified role",

    ERROR_AUTOROLE_TWO: "<:warn:625395797357363211> An error occured : I couldn't add the autorole because I don't have permissions to manage it.",

    NO_REASON_PROVIDED: "No reason given",

    ERR_INVALID_TIME: `<:no:625395798703603752> You must use a valid unit ! Valid units : \`s\`, \`m\`, \`h\`, \`d\`, \`w\`, \`y\``,

    ERR_SANCTION_YOURSELF: `<:no:625395798703603752> You cannot punish yourself!`,

    ERR_INVALID_MEMBER: `<:no:625395798703603752> Please mention a valid member!`,

    MUTE_SYNTAX: `Syntax : \`${prefix}mute <@Member>\``,

    DEMUTE_SYNTAX: `Syntax : \`${prefix}demute @<Member>\``,

    DEMUTE_SUCESS: `has been unmuted`,

    MUTE_MP: (sdoia) => `<:warn:625395797357363211> You have been muted for ${sdoia} !`,

    MUTE_SUCCESS: (member) => `<:yes:625395796908572683> **${member}** has been muted for **`,
    
    ERR_INVALID_ID: `<:no:625395798703603752> Please enter a valid ID!`,

    UNBAN_ERR_ID: (id) => `<:no:625395798703603752>  Provided ID \`${id}\` was not found!`,
    
    UNBAN_ERR_NOT_BANNED: (user) => `<:no:625395798703603752>  **${user}** is not banned!`,
    
	UNBAN_SUCCESS: (user) => `<:yes:625395796908572683> **${user}** has been unbanned.`,

    BAN_ID: "<:ID:708755663760785501> ID:",

    KICK_SYNTAX: `Syntax : \`${prefix}kick <@membre> <raison>\`\nE.g. \`${prefix}kick @Quark Doesn't like Jean\``,

    LEAVE_SYNTAX: `Syntax : \`${prefix}bye <on/off> <#channel> <Message>\`\nE.g. \`${prefix}bye #goodbye {member} just left {server}. We are now {membercount}\``,

    LEAVE_ACTIVE: "<:yes:625395796908572683> Goodbye message enabled.",

    LEAVE_DESAC: "<:yes:625395796908572683> Goodbye message disabled.",

    RR_KC: "This command has been deleted by the developers for optimization issues. If you think that you are able to code it for us, feel free to contact the support with u/contact",

    BVNMP_SYNTAX: `Syntax : \`${prefix}welcome-mp <on/off> <Message>\`\nE.g. \`${prefix}welcome-mp on Welcome {member} on {server}. We're now {membercount}\``,

    BVNMP_ACTIVE: "<:yes:625395796908572683> Welcome messages will now be sent to newcomers via private message.",

    BVNMP_DESAC: "<:yes:625395796908572683> Welcome messages will no longer be sent to newcomers via private message.",

    BVN_SYNTAX: `Syntax : \`${prefix}welcome <on/off> <#channel> <Message>\`\nE.g. \`${prefix}welcome on #newcomers Welcome {member} on {server}. We're now {membercount}\``,

    BVN_ACTIVE: "<:yes:625395796908572683> Welcome messages enabled.",

    BVN_DESAC: "<:yes:625395796908572683> Welcome messages disabled.",

    BALL_SYNTAX: `Syntax : \`${prefix}8ball <Your question>\`\nE.g. : \`${prefix}8ball Is Kizuru kind ?\``,

    CALC_OPE: "**Operation:**",

    CALC_RESULT: "**Result:**",

    ANNOUNCE_FOOTER: (fdse) => `Uty • Broadcast of : ${fdse}`,

    BAN_ERRTWO: "<:no:625395798703603752> I couldn't ban the user.",

    KICK_ERRTWO: "<:no:625395798703603752> I couldn't kick the user.",

    REROLL_SUCCES: "Success ! Giveaway rerolled !",

    REROLL_ERR: (trfr) => `No giveaway with id ${trfr} was found.`,

    BETA: "Here's the link to add the beta version of Uty : **<http://bit.ly/2oja10U>**",

    CONTACT: "No channel with `#help` as name was found. Please create one.",

    CONTACT_ERR: "<:no:625395798703603752> Please enter a reason.",

    CONTACT_SUCESS: "<:yes:625395796908572683> You've called the support ! Someone will help you as soon as possible :raising_hand:",

    HELP_INFO: (ufse) => `No information found for this command **${ufse}**`,

    HELP_NAME: (olaq) => `**Command name**: ${olaq}`,

    HELP_INFOTWO: (ikls) => `\n**Aliases**: ${ikls}`,

    HELP_DESC: (gjrl) => `\n**Description**: ${gjrl}`,

    HELP_FOOTER: "Syntax: <> = must be filled, [] = optional",

    HELP_TIMEOUT: (uyse) => `\n**Timeout**: ${uyse}`,

    HELP_PERM: (kisq) => `\n**Permission** : ${kisq}`,

    IB_TITLE: "Uty's Stats",

    IB_FIELD: [
        `🗺️ Servers`,
        `👤 Total users`,
        `🔈 Total vc connections`,
        `💬 Total chat channels`,
        `🖥️ Operating System`,
        `🎚️ Architecture`,
        `🔨 Processor`,
        `<:479567978732716042:565962078188470292> RAM`,
        `⏰ Uptime`,
        `🗂️ Library`
    ],

    INVITE_TITLE: "Uty on your server",

    C_ANY: "Nothing",

    C_INFO: (getvalueof) => `:printer: Informations about **${getvalueof}**`,

    C_NAME: "**Name**",

    C_ID: "**ID**",

    C_TYPE: "**Type**",

    C_DESC: "**Description**",

    C_CATEGORIE: "**Category**",

    S_OWNER: "**Server owner**",

    C_CREATE: "**Channel creation**",

    C_CREATEC: "**Category creation**",

    LANGUAGE_UPDATED: "Bot language modified.",

    MISSING_LANGUAGE: "You must specify a valid language. (english or french)",

    LANGUAGE_NO_EXIST: "I don't know this language :/",

    ERROR: "An error occured!",

    AVATAR: (mas) => `📸 Avatar of **${mas}**`,

    COOLDOWN: (time) => `You can use this command every ${time}.`,

    SYNTAXERR: "Syntax Error!",

    CALCUSE: `Syntax : \`${prefix}calc <operation>\`\nE.g. \`${prefix}calc 24/2*5+4-8\``,

    CALCERR: (question) => `Your operation (${question}) couldn't be solved!`,

    CALCERRTITLE: (question) => "Math Error!",

    AUTOROLEERR: `Syntax : \`${prefix}autorole <on/off> <@role/role>\`\nE.g. \`${prefix}autorole on Uty'Lisateur\``,

    AUTOROLE_INTROUVABLE: (pop) => `<:warn:625395797357363211> Can't find ${pop}!`,

    AUTOROLE_ACTIVE: "<:yes:625395796908572683> Autorole enabled !",

    AUTOROLE_DESACTIVE: "<:yes:625395796908572683> Autorole disabled !",

    HASTEBIN_USE: `Syntax : \`${prefix}hastebin <your code>\`\nE.g. \`${prefix}hastebin console.log('Hello World!')\``,

    HASTEBIN_SUCCESS: (mau) => `Link has been sent to ${mau}`,

    SHORTEN_USE: `Syntax : \`${prefix}shorten <your link>\`\nE.g. \`${prefix}shorten https://uty-bot.xyz\``,

    SHORTEN_ERROR: `**Invalid Link**\nSyntax : \`${prefix}shorten <your link>\`\nE.g. \`${prefix}shorten https://uty-bot.xyz\``,

    SHORTEN_SUCCESS: "📎 Link shortened",

    CLEAR_USE: `Syntax: \`${prefix}clear <number of messages>\`\nE.g. \`${prefix}clear 88\``,

    BAN_USE: `Syntax : \`${prefix}ban <@user> <reason>\`\nE.g. \`${prefix}ban @Enertix Le Vrai#0988 Raid\``,

    BAN_ERROR_ONE: "Please give to Uty the required permissions in order to ban someone.",

    BAN_ERROR_TWO: (iope) => `User (${iope}) isn't a member of your server.`,

    BAN_USER: "User banned:",

    BY: "By",

    BAN_BY: "You have been banned by",

    BAN_RAISON: "Reason:",

    BAN_TYPE: "Ban Type:",

    BAN_TYPE_INFINITE: "♾️ Until manual unban",

    BAN_ON_THE_SERVER: "On the server:",

    BAN_ALERT: "🔨 Ban Alert",

    KICK_USER: "User kicked:",

    KICK_ALERT: "Kick Alert",

    KICK_BY: "Kicked by",

    KICK_ERROR_TWO: (irope) => `User (${irope}) isn't in your server.`,

    BALL_REP: ["Yes", "No", "Surely", "I don't know", "Perhaps", "Of course", "Of course not", "For sure", "Indeed"],

    BALL_THAT: "that",

    ASCII_RAC: "Your text is too long. Shorten it.",

    QRCODE_USE: `Syntax : \`${prefix}qrcode <link/text>\` \nE.g. \`${prefix}qrcode https://uty-bot.xyz\``,

    EMBED_USE: `Syntax : \`${prefix}embed <your message>\`\nE.g. \`${prefix}embed Welcome! \n Here are the rules!\``,

    SAY_USE: `Syntax : \`${prefix}say <your message>\`\nE.g. \`${prefix}say I like pastas!\``,

    SONDAGE_USE: `Syntax : \`${prefix}poll <your poll>\`\nE.g. \`${prefix}sondage Y'all like pastas?\``,

    SURVEY: "Poll",

    WARN_RAISON: "Warn reason:",

    WARN_BY: "You have been warned by",

    WARN_USER: "User warned:",

    WARN_USE: `Syntax : \`${prefix}warn <@user> <reason>\`\nE.g. \`${prefix}warn @Enertix Le Vrai#0988 Flood\``,

    HELP_NUMBER_COMMAND: "Number of commands",

    HELP_LIST: "List of commands",

    UTILS: {
        YES: "Yes",
        NO: "No",
        STATUS: {
            "dnd": "<:red:535095760379838495> Do not disturb",
            "idle": "<:Idle:535095736761843712> AFK (idle)",
            "offline": "<:Invisible:535095544226381864> Offline",
            "online": "<:On:535095561968418838> Online"
        },
    },

    USERINFO_DESCRIPTION: "Show informations on the user!",
			USERINFO_ERR_ID: (id) => `<:no:625395798703603752> No user has the ID \`${id}\` !`,
			USERINFO_FIELDS: [
				"👤 Username",
				`<:__:708744869002346557> Tag`,
				`🤖 Bot`,
				`🎂 Creation`,
				`🎮 Game`,
				`<:On:535095561968418838> Status`,
				`👑 Highest role`,
				`🚪 Coming date`,
				`🕵️ Nickname`,
                `♥️ Shared servers with Uty`,
                `<:ID:708755663760785501> ID`
			],
			USERINFO_NO_GAME: "No game",
            USERINFO_NO_NICKNAME: "No nickname",
            
            SERVERINFO_HEADINGS:[
				`<:ticket:708751211657953381> Name`,
				`🎂 Creation`,
				`<:On:535095561968418838> Users online`,
				`🤖 Bot(s)`,
				`💤 AFK Channel`,
				`<:ID:708755663760785501> ID`,
				`👑 Owner`,
				`<:boost:708748691221250139> Boosts`
			],
            SERVERINFO_ONLINE: (Online) => `${Online}`,
            SERVERINFO_BOT: (botSize) => `${botSize}`,
			SERVERINFO_NO_AFK: "No AFK Channel",

};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(args);
    else return translation;
};

module.exports = translate;
