const Discord = require('discord.js');
const client = new Discord.Client()
const prefix = "-"
const lyricsFinder = require("lyrics-finder");



client.on("ready",()=>{
    console.log("Giriş tamamlamdı : "+ client.user.username)
})
client.on("message",async(message)=>{
    if(message.author.bot)return;
    var args = message.content.split(" ")
    if(message.channel.type == "dm") message.reply("sg bizim sunucuya")
    if(!args[0].startsWith(prefix))return;
    if(message.channel.type == "dm")return;

    if(args[0] == prefix+"söz"){
  
      if(args[1].startsWith("https://www.youtube.com")) return message.channel.send("url desteklenmiyor...")
        let lyrics = null;
    
        try {
          lyrics = await lyricsFinder(args.slice(1).join(" "), "");
          if (!lyrics) lyrics = `Bunun için bir lyrics bulamadım ${args.slice(1).join(" ")}.`;
        } catch (error) {
          lyrics = `Bunun için bir lyrics bulamadım ${args.slice(1).join(" ")}.`;
        }
    
        let lyricsEmbed = new Discord.MessageEmbed()
          .setTitle(`${args.slice(1).join(" ")} — Lyrics`)
          .setDescription(lyrics)
          .setColor("#F8AA2A")
          .setTimestamp();
    
        if (lyricsEmbed.description.length >= 2048)
          lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
        return message.channel.send(lyricsEmbed).catch(console.error);
      }
    })



client.login("ODM1NDkyMDc1NTI0MDYzMjMy.YIQOoQ.S2lWMKKiu6jzOF5YaHAtCGmIZco")
