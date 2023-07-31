module.exports = {
	name: 'ping',
	description: "Check bot's ping.",
	cooldown: 3000,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
		const msg = await message.reply('Pinging...')
		await msg.edit(`Pong! **${client.ws.ping} ms**`)
	}
};const { ApplicationCommandType, EmbedBuilder,ButtonBuilder,ActionRowBuilder,ButtonStyle } = require('discord.js');

module.exports = {
	name: 'help',
	description: "Show Commands of bot",
	type: ApplicationCommandType.ChatInput,

	run: async (client, interaction) => {
	const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands`;
		const embed = new EmbedBuilder()
		.setTitle('Help Commands')
		.setDescription(`test test`)
		.setColor('#0000FF')
		.setTimestamp()
		.setThumbnail(client.user.displayAvatarURL())
		.setFooter({ text: client.user.tag ,iconURL:client.user.avatarURL()})

		const actionRow = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('Invite')
			.setURL(inviteUrl)
			.setStyle(ButtonStyle.Link)
		])
		return interaction.reply({ embeds: [embed], components: [actionRow] })
	}
};