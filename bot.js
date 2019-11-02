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