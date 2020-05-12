const config = require('../config.json'),
prefix = config.prefix;

const languageData = {
//Time
    ONE_DAY: "un jour",
    DAYS: (hijfsdg) => `${hijfsdg}j`,
    ONE_HOUR: "une heure",
    HOURS: (sfdqe) => `${sfdqe}h`,
    ONE_MINUTE : "une minute",
    MINUTES: (mplas) => `${mplas}m`,
    ONE_SECOND: "une seconde",
    SECONDS: (fsdko) => `${fsdko}s`,

//Permissions ERROR
    ERRORPERMSTITLE: "Erreur de permissions!",
    ERRORPERMS: (opp) => `Vous n'avez pas la permission \`${opp}\`. Cette permission est requise pour executer cette commande.`,

//GIVEAWAY
    GAW_SYNTAX: (trf) => `Syntaxe : \`${trf}gaw <temps> <nb gagnant> <prix>\`\nExemple : \`${trf}gaw 7d 1 Premium Uty\``,
    GIVEAWAY: "🎉 **GIVEAWAY** 🎉",
    GIVEAWAY_ENDED: "**GIVEAWAY FINI**",
    GIVEAWAY_REMAINING: "Temps restant : **{duration}**",
    GAW_PARTICIPATE: (olka) => `Réagissez avec 🎉 pour participer !\nGiveaway de **${olka}**`,
    GAW_WIN: "🎉Félicitations {winners} ! Vous avez gagné **{prize}**!",
    GAW_FOOTER: "Giveaways",
    GAW_NOWIN: "Giveaway annulé, aucune participation valide.",
    GAW_WINNERS: "Gagnant(s)",
    GAW_ENDEDAT: "Fini",
    GAW_SECONDS: "secondes",
    GAW_MINUTES: "minutes",
    GAW_HOURS: "heures",
    GAW_DAYS: "jours",

//Musique
    VOLUME_MAX: (okbooq) => `Le volume doit être entre 0 et ${okbooq}!`,
    VOLUME_SUCCESS: (gsrok) => `Le volume a bien été défini sur **${gsrok}%**!\n:warning: Attention si le volume dépasse les 100% cela peux endommager votre périphérique audio ainsi que votre audition :warning:`,
    VOLUME_NAN: "Le volume donné n'est pas un nombre!",
    NP_ERR_NO_DESC: "**Aucune description**",
    RESUME_SUCCESS: "▶️ Musique de nouveau en cours de lecture.",
    PAUSE_SUCCESS: "⏸️ Musique en pause.",
    QUEUE_TITLE: `Playlist`,
    PLAY_ERR_CANT_JOIN: `<:no:625395798703603752> Je ne peux pas rentrer dans le salon vocal !`,
    PLAY_ERR_NO_SONG: `<:no:625395798703603752> Plus aucune musique dans la queue !`,
    PLAY_ADDED_TO_QUEUE: (pmkoz) => `🎵 ${pmkoz} a été ajouté à la queue !`,
    PLAY_SEARCH: "Veuillez indiquer une valeur pour sélectionner l'un des résultats de recherche compris entre 1 et 10.",
    PLAY_ERR_NO_NAME: `<:no:625395798703603752> Veuillez entrer un nom de vidéo à chercher !`,
    PLAY_ERR_VOICE_CHANNEL: `<:no:625395798703603752> Vous devez être connecté dans un salon vocal !`,
    PLAY_ERR_PERMS: `<:no:625395798703603752> Une erreur s'est produite. Soit je ne peux pas me connecter dans votre salon, soit je ne peux pas parler dans celui-ci. Vérifiez mes permissions et réessayez.`,
    PLAY_ERR_TIMEOUT: `⏳ Temps écoulé ! Veuillez retaper la commande !`,
    PLAY_ERR_NOT_FOUND: `<:no:625395798703603752> Aucun résultat sur Youtube !`,
    PLAY_ERR_NOT_PLAYING: `<:no:625395798703603752> Aucune musique en lecture !`,
    PLAY_PLAYING_TITLE: "Lecture en cours",
    PLAY_HEADINGS: [
        `Titre`,
        `Auteur`,
        `Durée`,
        `Recherche`,
        `Création`,
        `Description`,
        `**et plus...**`
    ],
    PLAY_SUCCESS: (trdfg) => `🎵 \`${trdfg}\` en cours de lecture...`,
    PLAY_ADDED_TO_QUEUE: (plkjkl) => `🎵 \`${plkjkl}\` ajouté à la queue!`,
    PLAY_ERR_NO_NAME: `<:no:625395798703603752> Veuillez entrer un nom de vidéo à chercher !`,
    STOP_TITLE: `Arrêter la musique`,
	STOP_CONTENT: (pmlok) => `Arrêter la musique\nVote : ${pmlok}\nRéagissez avec 👍 pour arrêter la musique !`,
    STOP_CONTENT_COMPLETE: "Musique correctement arrêtée !",
    SKIP_TITLE: "Passer à la chanson suivante",
	SKIP_CONTENT: (fsdjk, faoq, pmqds) => `Chanson suivante : \`${fsdjk}\`\nVote : ${faoq}/${pmqds}\nRéagissez avec 👍 pour passer à la chanson suivante !`,
	SKIP_CONTENT_COMPLETE: (dlqsm) => `Chanson passée ! Maintenant : \`${dlqsm}\``,
	SKIP_ERR_NO_SONG: `<:no:625395798703603752> Aucune chanson suivante !`,

    ERR_COMMAND_DISABLED: `<:no:625395798703603752> Cette commande est actuellement désactivée !`,

    WEATHER_HUMIDI: "Humidité :",

    WEATHER_VENT: "Raffale de vents :",

    WEATHER_TEMPTWO: "Température ressentie :",

    WEATHER_CELCIUS: "°C",

    WEATHER_TEMPERATURE: "Température :",

    WEATHER_ZONE: "Zone :",

    WEATHER_LOCATION: "Lieu :",

    WEATHER_NOCITY: "<:no:625395798703603752> Aucun lieu trouvé.",

    WEATHER_SYNTAX: `Syntax : \`${prefix}weather <Ville>\`\nExemple : \`${prefix}weather Agen\``,

    SUGGEST: "Suggestion :",

    SUGGEST_AUTHOR: "Suggestion de :",

    SUGGEST_SYNTAX: `Syntaxe : \`${prefix}suggest <Suggestion>\`\nExemple : \`${prefix}suggest Faire une commande\` `,

    ANNONCE_SYNTAX: `Syntaxe : \`${prefix}annonce <Votre annonce>\`\nExemple : \`${prefix}annonce La V2.5 est là !!\``,

    ASCII_SYNTAX: `Syntaxe : \`${prefix}ascii <Text>\`\nExemple: \`${prefix}ascii UTY\``,

    ERROR_GOODBYE: "<:warn:625395797357363211> Une erreur est survenue : le message d\'au revoir n\'a pas pu être envoyé car le salon est introuvable.",

    ERROR_WELCOME: "<:warn:625395797357363211> Une erreur est survenue : le message de bienvenue n\'a pas pu être envoyé car le salon est introuvable.",

    ERROR_AUTOROLE: "<:warn:625395797357363211> Une erreur est survenue : l\'autôrole n\'a pas pu être ajouté car le rôle est introuvable.",

    ERROR_AUTOROLE_TWO: "<:warn:625395797357363211> Une erreur est survenue : l\'autôrole n\'a pas pu être ajouté car le bot n\'a pas les permissions de gérer celui ci !",

    NO_REASON_PROVIDED: "pas de raison donnée",

    ERR_INVALID_TIME: `<:no:625395798703603752> Vous devez entrer un temps valide ! Unités valides : \`s\`, \`m\`, \`h\`, \`d\`, \`w\`, \`y\``,

    ERR_SANCTION_YOURSELF: `<:no:625395798703603752> Vous ne pouvez pas vous sanctionner vous-même !`,

    ERR_INVALID_MEMBER: `<:no:625395798703603752> Veuillez mentionner un membre valide !`,

    MUTE_SYNTAX: `Syntaxe : \`${prefix}mute <@Member>\``,

    DEMUTE_SYNTAX: `Syntaxe ! \`${prefix}demute @<Member>\``,

    DEMUTE_SUCESS: `est maintenant démute.`,

    MUTE_MP: (sdoia) => `<:warn:625395797357363211> Vous avez été mute pendant ${sdoia} !`,

    MUTE_SUCCESS: (member) => `<:yes:625395796908572683> **${member}** est maintenant mute pendant **`,

    ERR_INVALID_ID: `<:no:625395798703603752> Veuillez entrer une ID valide !`,

    UNBAN_ERR_ID: (id) => `<:no:625395798703603752>  Aucun utilisateur sur Discord ne possède l'ID \`${id}\` !`,

    UNBAN_ERR_NOT_BANNED: (user) => `<:no:625395798703603752>  **${user}** n'est pas banni !`,

    UNBAN_SUCCESS: (user) => `<:yes:625395796908572683> **${user}** vient d'être débanni.`,
    
    BAN_ID: "<:aiedi:709513845533835285> ID:",

    KICK_SYNTAX: `Syntaxe : \`${prefix}kick <@membre> <raison>\`\nExemple: \`${prefix}kick @Quark Aime pas jean\``,

    LEAVE_SYNTAX: `Syntaxe : \`${prefix}bye <on/off> <#channel> <Message>\`\nExemple : \`${prefix}bye on #aurevoir {member} vient de quitter {server} nous sommes {membercount}\``,

    LEAVE_ACTIVE: "<:yes:625395796908572683> Message d\'au revoir activé !",

    LEAVE_DESAC: "<:yes:625395796908572683> Message d\'au revoir désactivé !",

    RR_KC: "Malheuresement cette commande a été clôturée car elle n'était pas optimisée. Si vous êtes développeur et que vous pensez être capable de la re-développer, contactez un Administrateur de Uty.",

    BVNMP_SYNTAX: `Syntaxe : \`${prefix}bvn-mp <on/off> <Message>\`\nExemple : \`${prefix}bvn-mp on Bienvenue {member} sur {server} nous sommes désormais {membercount}\``,

    BVNMP_ACTIVE: "<:yes:625395796908572683> Les messages de bienvenue seront désormais envoyés en messages privés aux nouveaux venus",

    BVNMP_DESAC: "<:yes:625395796908572683> Les messages de bienvenue ne seront plus envoyés en messages privés aux nouveaux venus",

    BVN_SYNTAX: `Syntaxe : \`${prefix}bvn <on/off> <#channel> <Message>\`\nExemple : \`${prefix}bvn on #nouveaux Bienvenue {member} sur {server} nous sommes désormais {membercount}\``,

    BVN_ACTIVE: "<:yes:625395796908572683> Messages de bienvenue activés !",

    BVN_DESAC: "<:yes:625395796908572683> Messages de bienvenue désactivés !",

    BALL_SYNTAX: `Syntaxe : \`${prefix}8ball <Votre question>\`\nExemple : \`${prefix}8ball Kizuru est-il gentil ?\``,

    CALC_OPE: "**Opération:**",

    CALC_RESULT: "**Résultat:**",

    ANNOUNCE_FOOTER: (fdse) => `Uty • Annonce de : ${fdse}`,

    BAN_ERRTWO: "<:no:625395798703603752> Je n\'ai pas pu bannir cette personne",

    KICK_ERRTWO: "<:no:625395798703603752> Je n\'ai pas pu kick cette personne",

    REROLL_SUCCES: "Succès ! Giveaway relancé !",

    REROLL_ERR: (trfr) => `Aucun giveaway avec l'id ${trfr} n'a été trouvé.`,

    BETA: "Voici le lien pour ajouter la version Beta de Uty : **<http://bit.ly/2oja10U>**",

    CONTACT: "Aucun channel avec le nom `aide` a été trouvé, veuillez en créer un pour faire une demande d'aide",

    CONTACT_ERR: "<:no:625395798703603752> Veuillez entrer une raison !",

    CONTACT_SUCESS: "<:yes:625395796908572683> Vous venez de demander de l'aide au **Support de Uty** :raising_hand:",

    HELP_INFO: (ufse) => `Aucune information trouvée pour la commande **${ufse}**`,

    HELP_NAME: (olaq) => `**Nom de la commande**: ${olaq}`,

    HELP_INFOTWO: (ikls) => `\n**Aliasses**: ${ikls}`,

    HELP_DESC: (gjrl) => `\n**Description**: ${gjrl}`,

    HELP_FOOTER: "Syntaxe: <> = obligatoire, [] = facultatif",

    HELP_TIMEOUT: (uyse) => `\n**Timeout**: ${uyse}`,

    HELP_PERM: (kisq) => `\n**Permission** : ${kisq}`,

    IB_TITLE: "Statistiques d'Uty",

    IB_FIELD: [
        `🗺️ Nombre de serveurs`,
        `👤 Nombre d'utilisateurs`,
        `🔈 Nombre de connections vocales`,
        `💬 Nombre de salons textuels`,
        `🖥️ Système d'exploitation`,
        `🎚️ Architecture`,
        `🔨 Processeur`,
        `<:server:623164595271368724> RAM`,
        `⏰ En ligne sur Discord depuis`,
        `🗂️ Lib`
    ],

    IB_FOOTER: "Serveur discord : https://discord.gg/FmyzBgj",

    INVITE_TITLE: "Uty sur votre Serveur",

    C_ANY: "Aucune",

    C_INFO: (getvalueof) => `:printer: Informations sur **${getvalueof}**`,

    C_NAME: "🎟️ Nom",

    C_ID: "<:aiedi:709513845533835285> ID",

    C_TYPE: "<:hashtag:709785136601890856> Type",

    C_DESC: "📄 Description",

    C_CATEGORIE: "🗄️ Catégorie",

    S_OWNER: "👑 Propiétaire du serveur",

    C_CREATE: "🎂 Création du channel",

    C_CREATEC: "🎂 Création de la catégorie",

    LANGUAGE_UPDATED: "<:yes:625395796908572683> Langue du bot mise à jour",

    MISSING_LANGUAGE: (rlsoz) => `<:no:625395798703603752> Vous devez préciser une langue valide! (${rlsoz})`,

    LANGUAGE_NO_EXIST: "<:no:625395798703603752> Cette langue n'est pas connue de Uty.",

    ERROR: "<:no:625395798703603752> Une erreur s'est produite",

    AVATAR: (mas) => `📸 Avatar de **${mas}**`,

    COOLDOWN: (time) => `<:no:625395798703603752> Vous pouvez utiliser cette commande seulement toutes les ${time}.`,

    SYNTAXERR: "Erreur de Syntaxe!",

    CALCUSE: `Syntaxe : \`${prefix}calc <Votre opération>\`\nExemple : \`${prefix}calc 24/2*5+4-8\``,

    CALCERR: (question) => `<:no:625395798703603752> Votre opération (${question}) est impossible à effectuer!`,

    CALCERRTITLE: (question) => "<:no:625395798703603752> Erreur mathématique!",

    AUTOROLEERR: `Syntaxe : \`${prefix}autorole <on/off> <@role/role>\`\nExemple : \`${prefix}autorole on Uty'Lisateur\``,

    AUTOROLE_INTROUVABLE: (pop) => `<:warn:625395797357363211> Rôle ${pop} introuvable !`,

    AUTOROLE_ACTIVE: "<:yes:625395796908572683> Autorôle Activé !",

    AUTOROLE_DESACTIVE: "<:yes:625395796908572683> Autorôle Désactivé !",

    HASTEBIN_USE: `Syntaxe : \`${prefix}hastebin <Votre code>\`\nExemple : \`${prefix}hastebin console.log('Hello World!')\``,

    HASTEBIN_SUCCESS: (mau) => `<:yes:625395796908572683> Le lien a été envoyé à ${mau}`,

    SHORTEN_USE: `Syntaxe : \`${prefix}shorten <Votre lien>\`\nExemple : \`${prefix}shorten https://uty-bot.xyz\``,

    SHORTEN_ERROR: `**Lien invalide**\nSyntaxe : \`${prefix}shorten <Votre lien>\`\nExemple : \`${prefix}shorten https://uty-bot.xyz\``,

    SHORTEN_SUCCESS: "📎 Lien raccourci",

    CLEAR_USE: `Syntaxe: \`${prefix}clear <nombre de messages>\`\nExemple: \`${prefix}clear 88\``,

    BAN_USE: `Syntaxe : \`${prefix}ban <Mention de l'utilisateur à ban> <raison>\`\nExemple : \`${prefix}ban @Enertix Le Vrai#0988 Raid\``,

    BAN_ERROR_ONE: "Veuillez donner à Uty les permissions requises pour bannir des utilisateurs.",

    BAN_ERROR_TWO: (iope) => `Le membre (${iope}) n'est pas sur votre serveur.`,

    BAN_USER: "Membre banni:",

    BY: "Par",

    BAN_BY: "Vous avez été banni par",

    BAN_RAISON: "Raison:",

    BAN_TYPE: "Type de ban:",

    BAN_TYPE_INFINITE: "♾️ Jusqu'à débannissement manuel",

    BAN_ON_THE_SERVER: "Sur le serveur:",

    BAN_ALERT: "🔨 Alerte Bannissement",

    KICK_USER: "Membre kické:",

    KICK_ALERT: "Alerte de Kick",

    KICK_BY: "Kické par",

    KICK_ERROR_TWO: (irope) => `Le membre (${irope}) n'est pas sur votre serveur.`,

    BALL_REP: ["Oui", "Non", "Sûrement", "Je ne sais pas", "Probablement", "Evidemment", "Evidemment que non", "Bien-sûr", "Effectivement"],

    BALL_THAT: "que",

    ASCII_RAC: "Votre texte est trop long! Veuillez le raccourcir.",

    QRCODE_USE: `Syntaxe : \`${prefix}qrcode <lien/texte>\` \nExemple : \`${prefix}qrcode https://uty-bot.xyz\``,

    EMBED_USE: `Syntaxe : \`${prefix}embed <Votre message>\`\nExemple : \`${prefix}embed Bienvenue! \n Voici les règles du serveur!\``,

    SAY_USE: `Syntaxe : \`${prefix}say <Votre message>\`\nExemple : \`${prefix}say J'aime les pâtes!\``,

    SONDAGE_USE: `Syntaxe : \`${prefix}sondage <Votre question>\`\nExemple : \`${prefix}sondage aimez vous les pâtes?\``, 

    SURVEY: "Sondage",

    WARN_RAISON: "Raison du warn:",

    WARN_BY: "Vous avez été warn par",

    WARN_USER: "Utilisateur averti:",

    WARN_USE: `Syntaxe : \`${prefix}warn <Mention de l'utilisateur à warn> <raison>\`\nExemple : \`${prefix}warn @Enertix Le Vrai#0988 Flood\``,

    HELP_NUMBER_COMMAND: "Nombre de commandes",

    HELP_LIST: "Liste des commandes",

    UTILS: {
        YES: "Oui",
        NO: "Non",
        STATUS: {
            "dnd": "<:red:535095760379838495> Ne pas déranger",
            "idle": "<:Idle:535095736761843712> AFK (absent)",
            "offline": "<:Invisible:535095544226381864> Déconnecté",
            "online": "<:On:535095561968418838> En ligne"
        },
    },

    USERINFO_DESCRIPTION: "Affiche des informations sur l'utilisateur !",
			USERINFO_ERR_ID: (id) => `<:no:625395798703603752> Aucun utilisateur sur Discord ne possède l'ID \`${id}\` !`,
			USERINFO_FIELDS: [
				"👤 Pseudo",
				`<:hashtag:709785136601890856> Discriminateur`,
				`🤖 Robot`,
				`🎂 Création`,
				`🎮 Jeu`,
				`<:On:535095561968418838> Statut`,
				`👑 Rôle le plus haut`,
				`🚪 Arrivée sur le serveur`,
				`🕵️ Surnom`,
                `♥️ Serveur(s) en commun avec Uty`,
                `<:aiedi:709513845533835285> ID`
			],
			USERINFO_NO_GAME: "Pas de jeu",
            USERINFO_NO_NICKNAME: "Pas de surnom",
            
            SERVERINFO_HEADINGS:[
				`🎟️ Nom`,
				`🎂 Création`,
				`<:On:535095561968418838> Membres en ligne`,
				`🤖 Bot(s)`,
				`💤 Salon AFK`,
				`<:aiedi:709513845533835285> ID`,
				`👑 Fondateur`,
				`<a:Boost:651892476679946248> Boosts`
			],
            SERVERINFO_ONLINE: (Online) => `${Online}`,
            SERVERINFO_BOT: (botSize) => `${botSize}`,
			SERVERINFO_NO_AFK: "Aucun salon AFK",

};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(args);
    else return translation;
};

module.exports = translate;
