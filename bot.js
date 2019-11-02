// Import libraries
const Discord = require('discord.js');
const client = new Discord.Client();


// Event listener when a user connected to the server.
client.on('ready', () => {
  client.user.setActivity('Team Fortress 2');
  console.log(`Logged in as ${client.user.tag}!`);
});
// Event listener when a user sends a message in the chat.
client.on('message', msg => {

  // We check the message content and looks for the word "ping", so we can have the bot respond "pong"
  if (
      msg.content.includes('tavo')     ||
      msg.content.includes('tabo')     ||
      msg.content.includes('tavotas')  ||
      msg.content.includes('tabotas')  ||
      msg.content.includes('Tabotas')  ||
      msg.content.includes('Tavotas')  ||
      msg.content.includes('Tabo')     ||
      msg.content.includes('Tavo')     ||
      msg.content.includes('vato')     ||
      msg.content.includes('Vato')     ||
      msg.content.includes('bato')     ||
      msg.content.includes('Bato')     ||
      msg.content.includes('Tabot')    ||
      msg.content.includes('Tavot')    ||
      msg.content.includes('tabot')    ||
      msg.content.includes('tavot')    ||
      msg.content.includes('diosito')  ||
      msg.content.includes('Diosito')
    ) {
    msg.reply(randomTavo());
  }
  else if(msg.content.includes('aiuda')){
    msg.reply("Quien soy?");
  }
  else if(msg.content.includes("dab")){
    // const attachment = new MessageAttachment(randomImg());
    // msg.channel.send(attachment);
    msg.reply("div",{file:randomImg()});
  }

});

// Initialize bot by connecting to the server
client.login(process.env.BOT_TOKEN);

function randomTavo(){
    var frases = [
        "Sisa",
        "Ella e callaitaaaa",
        "Ñepe",
        "equisde",
        "yesorno race",
        "ay, xd",
        "si quieres, sino no",
        "grasa",
        "yayazo",
        "nomas a veces",
        "xd",
        "wtf",
        "dab",
        "ñepestastico",
        "bebesita",
        "a veces",
        "porcelana",
        "porfabor",
        "soy diosito",
        "tabo",
        "absorbo el alcohoooool",
        "el chuky lozano",
        "echese un dab",
        "un mini justice",
        "siono, siono",
        "diosote",
        "mi pichula",
        "aaaaaaaa mipichula",
        "._.XD",
        "te pareces a yayazo",
        "pito",
        "puerca",
        "chalupas",
        "chupas",
        "pachulas",
        "panda",
        "xdiosito",
        "diosote",
        "ahhhhh",
        "._.XD"
    ]
    var no = Math.floor((Math.random() * frases.length));
    var frase = frases[no];
    return frase;
}

function randomImg(){
  var imgs = [
      "https://i.ytimg.com/vi/SrDatE8K6pc/maxresdefault.jpg",
      "https://pbs.twimg.com/media/D_KVs-_XUAEM3Yh.jpg",
      "http://pm1.narvii.com/7298/4679c582eda8f970711a06d032a355fbc7fe0e72r1-512-512v2_uhq.jpg",
      "https://i.redd.it/0yg11k4ug6l31.jpg",
      "https://pics.me.me/otis-44960217.png",
      "https://pbs.twimg.com/media/Dq_AnwYU0AA_aLu.jpg"
  ]
  var no = Math.floor((Math.random() * imgs.length));
  var img = imgs[no];
  return img;
}