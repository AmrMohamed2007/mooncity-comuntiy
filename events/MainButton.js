const { ActivityType } = require('discord.js');
const client = require('..');

var ms = require("ms")

var Discord = require("discord.js");
client.on("interactionCreate", interaction => {
    if(!interaction.isButton()) return;
    if(interaction.customId == "rules") {
        var MessageObject = client.messages.Rules(interaction.guild)
        interaction.reply(MessageObject)
    }
})
