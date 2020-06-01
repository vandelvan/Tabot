// Import libraries
const Discord = require("discord.js");
const client = new Discord.Client();
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

var lastCommitDeco = "";
var autorDeco = "";
var cambioDeco = "";
var lastCommitData = "";
var autorData = "";
var cambioData = "";

// Event listener when a user connected to the server.
client.on("ready", () => {
  client.user
    .setActivity("chill of the monsters - vandelvan", {
      type: "LISTENING",
    })
    .then(console.log)
    .catch(console.error);
  console.log(`Logged in as ${client.user.tag}!`);
  // getCommitsRepos(); DEPRECATED until another project comes
});
// Event listener when a user sends a message in the chat.
client.on("message", async (msg) => {
  if(Math.floor(Math.random() * 5) == 1)
  {
    msg.react(randomEmoji());
  }
  else if(Math.floor(Math.random() * 5) == 2)
  {
      msg.react('🅱️')
      .then(() => msg.react('🅰️'))
      .then(() => msg.react('\:regional_indicator_b:'))
      .then(() => msg.react('🅾️'))
      .catch(() => console.error("fallo algo al reaccionar"));
  }
  if (
    msg.content.toLowerCase().includes("tavo")    ||
    msg.content.toLowerCase().includes("tabo")    ||
    msg.content.toLowerCase().includes("tavotas") ||
    msg.content.toLowerCase().includes("tabotas") ||
    msg.content.toLowerCase().includes("vato")    ||
    msg.content.toLowerCase().includes("bato")    ||
    msg.content.toLowerCase().includes("tabot")   ||
    msg.content.toLowerCase().includes("tavot")   ||
    msg.content.toLowerCase().includes("diosito") ||
    msg.content.toLowerCase().includes("babo")    ||
    msg.content.toLowerCase().includes("dios")
  ) {
    msg.reply(randomTavo());
  } else if (msg.content.toLowerCase().includes("aiuda")) {
    msg.reply("Quien soy?");
  } else if (msg.content.toLowerCase().includes("mox")) {
    msg.reply(
      "Maldita sea. Quiero cogerme a max. Tengo mi cuarto lleno de posters de chochoneguer, todos los días me tocó pensando en sus musculos tallados por los dioses, de sólo pensar en su rostro creado por artesanos de tonala y su nariz perfecta ya dejo un charco abajo de mi. Mi mamá ya no me deja agendar con max ."
    );
  } else if (msg.content.toLowerCase().includes("que hora")) {
    msg.reply("las horas del panzon");
  } else if (msg.content.toLowerCase().includes("dab")) {
    const attachment = new Discord.MessageAttachment(randomImg());
    msg.channel.send(attachment);
    // msg.reply("div",{file:randomImg()});
  } else if (msg.content.toLowerCase().includes("zona") || msg.content.toLowerCase().includes("sona")) {
    msg.reply("Cual?");
    msg.reply(randomTavo());
  }
  if (
    msg.content.toLowerCase().includes("cancion") ||
    msg.content.toLowerCase().includes("grammy") ||
    msg.content.toLowerCase().includes("escuchar")
  ) {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
      const ytdl = require("ytdl-core");
      connection.play(ytdl(randomcancion(), { filter: "audioonly" }));
      // setTimeout(msg.member.voice.channel.leave(), 300000); //se sale del chat de voz despues de 5mins
    } else {
      msg.reply("Eljotodiceque?");
    }
  }
});

// Initialize bot by connecting to the server
client.login(process.env.BOT_TOKEN);

function randomTavo() {
  var frases = [
    "claro cielo pero no mates a nadie porfavor",
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
    "._.XD",
    "cual zona?",
    "la cabezona",
    "la panzona",
  ];
  var no = Math.floor(Math.random() * frases.length);
  var frase = frases[no];
  return frase;
}

function randomcancion() {
  var rolas = [
    "https://www.youtube.com/watch?v=acEOASYioGY",
    "https://www.youtube.com/watch?v=L6aCaDqxRIc",
    "https://www.youtube.com/watch?v=hCzfzeobeNM",
    "https://www.youtube.com/watch?v=9FWgcBfs5A0",
    "https://www.youtube.com/watch?v=H__qSOH8eOc",
    "https://www.youtube.com/watch?v=Mt9WIUMEjUM",
    "https://www.youtube.com/watch?v=6Dh-RL__uN4",
    "https://www.youtube.com/watch?v=mmKAn1MeB04",
    "https://www.youtube.com/watch?v=ghr8EJ5D_qs",
    "https://www.youtube.com/watch?v=-jAE3YGxFC0",
    "https://www.youtube.com/watch?v=3-Z-pzxiUAs",
    "https://www.youtube.com/watch?v=aBFlGhuVWYc",
    "https://www.youtube.com/watch?v=tbneQDc2H3I",
    "https://www.youtube.com/watch?v=h6k5qbt72Os",
    "https://www.youtube.com/watch?v=0K4oym9Pw48",
    "https://www.youtube.com/watch?v=U06jlgpMtQs",
    "https://www.youtube.com/watch?v=vTIIMJ9tUc8",
    "https://www.youtube.com/watch?v=OLpeX4RRo28",
    "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    "https://www.youtube.com/watch?v=8xUHkqkkDaw",
    "https://www.youtube.com/watch?v=DYVIP3sdHBg",
  ];
  var no = Math.floor(Math.random() * rolas.length);
  var rola = rolas[no];
  return "!p " + rola;
}

function randomImg() {
  var imgs = [
    "https://i.ytimg.com/vi/SrDatE8K6pc/maxresdefault.jpg",
    "https://i.redd.it/0yg11k4ug6l31.jpg",
    "https://pics.me.me/otis-44960217.png",
    "https://pbs.twimg.com/media/Dq_AnwYU0AA_aLu.jpg",
    "https://media.makeameme.org/created/c-kronk.jpg"
  ];
  var no = Math.floor(Math.random() * imgs.length);
  var img = imgs[no];
  return img;
}

function randomEmoji() {
  var emoji = [
    "😩",
    "💯",
    "🅱",
    "🔥",
    "💦",
    "👌",
    "😭",
    "😣",
    "😤",
    "🍆",
    "😳",
    "🗿",
    "😍",
    "🖕",
  ];
  var no = Math.floor(Math.random() * emoji.length);
  var em = emoji[no];
  return em;
}

function getCommitsRepos() {
  const channel = client.channels.cache.get("678456371171033088");
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  octokit.repos
    .listCommits({
      owner: "vandelvan",
      repo: "Decodificador",
    })
    .then((value) => {
      if (lastCommitDeco == "" || lastCommitDeco != value.data[0].sha) {
        lastCommitDeco = value.data[0].sha;
        autorDeco = value.data[0].author.login;
        cambioDeco = value.data[0].commit.message;
        channel.send(
          "`" +
            autorDeco +
            "` Realizo: `" +
            cambioDeco +
            "` en el repo de Decodificador xd"
        );
      }
    });

  octokit.repos
    .listCommits({
      owner: "vandelvan",
      repo: "Datapath",
    })
    .then((value) => {
      if (lastCommitData == "" || lastCommitData != value.data[0].sha) {
        lastCommitData = value.data[0].sha;
        autorData = value.data[0].author.login;
        cambioData = value.data[0].commit.message;
        channel.send(
          "`" +
            autorData +
            "` Realizo: `" +
            cambioData +
            "` en el repo de Datapath xd"
        );
      }
    });
  setTimeout(function () {
    getCommitsRepos();
  }, 600000); //cada 10 mins
}
