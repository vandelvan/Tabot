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
      msg.content === 'tabotas' 
    ) {
    msg.reply(randomTavo());
  }

});

// Initialize bot by connecting to the server
client.login(auth.token);

function randomTavo(){
    var no = Math.floor((Math.random() * 10) + 1);
    var frase = "xd"
    switch(no){
        case 1:
            frase = "Sisa"
            break;
        case 2:
            frase = "Ella e callaitaaaa"
            break;
        case 3:
            frase = "Ñepe";
            break;
        case 4:
            frase = "equisde";
            break;
        case 5:
            frase = "yesorno race";
            break;
        case 6:
            frase = "ay, xd";
            break;
        case 7:
            frase = "si quieres, sino no";
            break;
        case 8:
            frase = "grasa";
            break;
        case 9:
            frase = "yayazo";
            break;
        case 10:
            frase = "nomas a veces";
            break;
        default:
            frase = "xd";
            break;
    }
    return frase;
}