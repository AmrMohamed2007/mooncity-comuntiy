const ReturnEmbed = require("./Embeds/Embed")


var AllMessages = {
  Rules: function ReturnRules(guild) {
    var embed = ReturnEmbed(guild,"Red","Server Rules","هنا القوانين")
    return {content:"",embeds:[embed],ephemeral:true}
  }
}




module.exports = AllMessages