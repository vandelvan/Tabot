// Import libraries
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');


// Event listener when a user connected to the server.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener when a user sends a message in the chat.
client.on('message', msg => {

  // We check the message content and looks for the word "ping", so we can have the bot respond "pong"
  if (
      msg.content === 'tavo' ||
      msg.content === 'tabo' ||
      msg.content === 'tavotas' ||
      msg.content === 'tabotas' ||
      msg.content === 'Tabotas' ||
      msg.content === 'Tavotas' ||
      msg.content === 'Tabo' ||
      msg.content === 'Tavo' ||
      msg.content === 'vato' ||
      msg.content === 'Vato' ||
      msg.content === 'bato' ||
      msg.content === 'Bato' ||
      msg.content === 'diosito' ||
      msg.content === 'Diosito'
    ) {
    msg.reply(randomTavo());
  }
  else if(msg.content === 'aiuda'){
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
        "puerca"
    ]
    var no = Math.floor((Math.random() * frases.length));
    var frase = frases[no];
    return frase;
}