var {EmbedBuilder} = require("discord.js")

function ReturnEmbed(guild,color,title,desc) {
var embed =new EmbedBuilder()
.setAuthor({name:guild.name,iconURL:guild.iconURL()})
.setColor(color)
.setFooter({text:guild.name,iconURL:guild.iconURL()})
.setTimestamp()
if(title !== "none") embed.setTitle(title);

if(desc && desc !== "none") embed.setDescription(desc);

return embed;
}

module.exports = ReturnEmbed;