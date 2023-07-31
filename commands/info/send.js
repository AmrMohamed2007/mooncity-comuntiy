const { ButtonBuilder, ButtonStyle, ActionRow, ActionRowBuilder } = require("discord.js");


module.exports = {
	name: 'send',
	description: "send info from server",
	cooldown: 3000,
	userPerms: ['Administrator'],
	botPerms: [],
	run: async (client, message, args) => {
        var msg = "**قم بأختيار ماتريد معرفته**"
        var button1 = new ButtonBuilder()
        .setCustomId("rules")
        .setLabel("Rules")
        .setStyle(ButtonStyle.Danger)
        var row = new ActionRowBuilder()
        .setComponents(button1)
        await message.channel.send({content:msg,components:[row]})
        await message.delete();
    }
};