const { ActivityType } = require('discord.js');
const client = require('..');
const chalk = require('chalk');
var ms = require("ms")

var Discord = require("discord.js");
client.on('ready', () => {
    console.log('Bot is ready!');
    client.user.setStatus("dnd")
    .client.user.setActivity({"name":"Dev's Leader ..!","type":Discord.ActivityType.Playing})

});
