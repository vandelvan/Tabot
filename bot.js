// Import libraries
const Discord = require("discord.js");
const client = new Discord.Client();
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
const Parser = require('rss-parser');
const parser = new Parser({
  customFields: {
    item: [
      ['media:content','img'],
    ],
  }
});

// Event listener when a user connected to the server.
client.on("ready", () => {
  client.user
    .setActivity("Team Fortress 2", {
      type: "PLAYING",
    })
    .then(console.log)
    .then(getCucei())
    .then(getGTA())
    .catch(console.error);
  console.log(`Logged in as ${client.user.tag}!`);
});
// Event listener when a user sends a message in the chat.
client.on("message", async (msg) => {
  if (Math.floor(Math.random() * 5) == 1) {
    msg.react(randomEmoji());
  } else if (Math.floor(Math.random() * 10) == 2) {
    msg
      .react("🅱️")
      .then(() => msg.react("🅰️"))
      .then(() => msg.react("🇧"))
      .then(() => msg.react("🅾️"))
      .catch(() => console.error("fallo algo al reaccionar"));
  } else if (Math.floor(Math.random() * 10) == 9) {
    msg
      .react("🅱️")
      .then(() => msg.react("🅰️"))
      .then(() => msg.react("🇧"))
      .then(() => msg.react("🅾️"))
      .then(() => msg.react("🆘"))
      .catch(() => console.error("fallo algo al reaccionar"));
  } else if (Math.floor(Math.random() * 10) == 5) {
    msg
      .react("🇩")
      .then(() => msg.react("🇦"))
      .then(() => msg.react("🇧"))
      .catch(() => console.error("fallo algo al reaccionar"));
  }
  if (
    msg.content.toLowerCase().includes("tavo") ||
    msg.content.toLowerCase().includes("tabo") ||
    msg.content.toLowerCase().includes("tavotas") ||
    msg.content.toLowerCase().includes("tabotas") ||
    msg.content.toLowerCase().includes("vato") ||
    msg.content.toLowerCase().includes("bato") ||
    msg.content.toLowerCase().includes("tabot") ||
    msg.content.toLowerCase().includes("tavot") ||
    msg.content.toLowerCase().includes("diosito") ||
    msg.content.toLowerCase().includes("babo") ||
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
  } else if (
    msg.content.toLowerCase().includes("zona") ||
    msg.content.toLowerCase().includes("sona")
  ) {
    msg.reply("Cual?");
    msg.reply(randomTavo());
  }else if (
    msg.content.toLowerCase().includes("sus") ||
    msg.content.toLowerCase().includes("among") ||
    msg.content.toLowerCase().includes("drip") ||
    msg.content.toLowerCase().includes("amog") ||
    msg.content.toLowerCase().includes("vent") ||
    msg.content.toLowerCase().includes("impost")
  ) {
    msg.reply("AMUGUS");
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
    "sabroso",
    "pana sonic",
    "sus",
    "di su goma al reves",
    "amogus",
    "quien lo diría?",
    "caon",
    "caon el amongus",
    "di invented sin la n"
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
    "https://media.makeameme.org/created/c-kronk.jpg",
    "https://i.ytimg.com/vi/N1z9k2R3hww/maxresdefault.jpg",
    "https://i.redd.it/ul95f16s5eh41.jpg",
    "https://media.tenor.com/images/8401102bb79891d25fe495146df75252/tenor.png",
    "https://i1.sndcdn.com/artworks-TOJJyHynzM0iRSuW-9URBDA-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-hcMJWmi0fxarCNFj-59LfMA-t500x500.jpg",
    "https://i.imgflip.com/50i42a.png",
    "https://i.kym-cdn.com/photos/images/newsfeed/002/025/085/fe6.jpg",
    "https://i.redd.it/rtq1tph23wq61.png",
    "https://i.kym-cdn.com/photos/images/newsfeed/002/024/944/6f2.png",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/966/362/177.jpg"
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
    "<:nopapu:841022501022728192>",
    "<:cholicoyes:841022080156696616>",
    "<:cholico:760863824752017448>",
    "<:cholicono:766651952028188702>",
    "<:farfan:820003689719922689>",
    "<:ustemamele:662528350362796042>",
    "<:eleazar:512829263171289098>",
    "<:topo:512830005299118081>",
    "<:ceballos:512829530084212743>"
  ];
  var no = Math.floor(Math.random() * emoji.length);
  var em = emoji[no];
  return em;
}

//metodo para nuevas publicaciones de INCO/CUCEI
async function getCucei() {
  const clientDB = new MongoClient(uri, {poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true });
  const channel = client.channels.cache.get("678456371171033088");
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  //Obtiene el contenido de Ing.cucei por medio de rss
  let feed = await parser.parseURL('http://fetchrss.com/rss/5ffb954a9d11d1118f1a7fa35ffb9559cb480a2b3f100d02.xml');
  let text = feed.items[0].title;
  let img;
  if (feed.items[0].img){
    img = feed.items[0].img.$.url;
  }
  else
  {
    img = "https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/298738533_5286314941405582_2362797853950170749_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGnIK8qUAk-ZkWuq-UpchrbBtqtdvTOBxkG2q129M4HGRl8yZA-5xnLLdBOLQKYxZwd8kpX3QRIRkpR8RV3OUjG&_nc_ohc=62oKYqTtJ9kAX9Ly06M&_nc_ht=scontent.fgdl11-1.fna&oh=00_AT-0LQ6SQdH0y-9E4EWX9RnquCY9NIvgCk4pVN1b6AxH9Q&oe=630D7DBF"
  }
  let desc = feed.items[0].content;
  let fuente = feed.items[0].link;
  desc = desc.replace(/<[^>]*>?/gm, '');
  desc = desc.replace(/\[[^\]]*\]?/gm, '');
  //Obtiene el contenido de CUCEI por medio de rss
  feed = await parser.parseURL('http://fetchrss.com/rss/5ffb954a9d11d1118f1a7fa35ffe2e056b5a6a484625e002.xml');
  let textC = feed.items[0].title;
  let imgC;
  if (feed.items[0].img){
    imgC = feed.items[0].img.$.url;
  }
  else
  {
    imgC = "https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/291634417_5174062346018090_3160842060629917700_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG2DKXYHAZjiRmq06Z1F9t78KJ0NyHg0r3wonQ3IeDSvQEm13oyLS02UfasIKJ0OjTBUxy2LCSDEhEvFEG0LIaJ&_nc_ohc=Qtl74ebBpOAAX8tNwGo&_nc_ht=scontent.fgdl11-1.fna&oh=00_AT_9r5zE0mKRQLovcYnHA_YXNyp3B2M7eJ82rZyGISgnWg&oe=630E6C9D"
  }
  let descC = feed.items[0].content;
  let fuenteC = feed.items[0].link;
  descC = descC.replace(/<[^>]*>?/gm, '');
  descC = descC.replace(/\[[^\]]*\]?/gm, '');
  //tomamos los datos mas recientes
  await clientDB.connect(err => {
    if(err) throw err;
    const collection = clientDB.db("heroku_pknlh6w2").collection("tabot");
    console.log("conectado a la DB");
    collection.find({}).toArray(function(err, docs) {
      if(err) throw err;
      if (docs[0].text != text) {
        collection.updateOne({}, { $set: { "text" : text } }, function(err, result) {
          if(err) throw err;
          console.log("Updated Ing.Cucei");
          channel.send("<@&707227755628199937> " + text + "\n" +  desc + "\n Fuentezaxa: " + fuente);
          const attachment = new Discord.MessageAttachment(img);
          channel.send(attachment);
        });
      }
      if (docs[0].textC != textC) {
        collection.updateOne({}, { $set: { "textC" : textC } }, function(err, result) {
          if(err) throw err;
          console.log("Updated CUCEI");
          channel.send("<@&707227755628199937> " + textC + "\n" + descC + "\n Fuentezaxa: " + fuenteC);
          const attachment = new Discord.MessageAttachment(imgC);
          channel.send(attachment);
        });
      }
    }
    );      
  });
  await clientDB.close();
}

async function getGTA() {
  const clientDB = new MongoClient(uri, {poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true });
  const channel = client.channels.cache.get("678456371171033088");
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  //Obtiene el contenido de GTA Online
  let feed = await parser.parseURL('https://www.reddit.com/r/gtaonline.rss');
  let textGTA = feed.items[0].title;
  let desc = feed.items[0].content;
  let fuente = feed.items[0].link;
  desc = desc.replace(/<[^>]*>?/gm, '');
  desc = desc.replace(/\[[^\]]*\]?/gm, '');
  if(!textGTA.includes("Weekly")) return;
  //tomamos los datos mas recientes
  await clientDB.connect(err => {
    if(err) throw err;
    const collection = clientDB.db("heroku_pknlh6w2").collection("tabot");
    console.log("conectado a la DB");
    collection.find({}).toArray(function(err, docs) {
      if(err) throw err;
      if (docs[0].textGTA != textGTA) {
        collection.updateOne({}, { $set: { "textGTA" : textGTA } }, function(err, result) {
          if(err) throw err;
          console.log("Updated GTA");
          channel.send("<@&455565039718498304> " + desc + "\n Fuentezaxa: " + fuente);
        });
      }
    }
    );      
  });
  await clientDB.close();
}
