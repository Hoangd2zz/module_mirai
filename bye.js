const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bye",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "DMH",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
  denpendencies: {
        "fs": "",
        "request": ""
    }
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "byebye1.gif")) request 
    ("https://i.imgur.com/ntGQdry.gif").pipe(fs.createWriteStream(dirMaterial + "byebye1.gif")); 
    if (!fs.existsSync(dirMaterial + "byebye2.gif")) request  
    ("https://i.imgur.com/EOilk4i.gif").pipe(fs.createWriteStream(dirMaterial + "byebye2.gif")); 
    if (!fs.existsSync(dirMaterial + "byebye3.gif")) request  
    ("https://i.imgur.com/moXrFER.gif").pipe(fs.createWriteStream(dirMaterial + "byebye3.gif")); 
}
module.exports.run = function({ api, event, client, __GLOBAL }) { }

module.exports.handleEvent = async function({ api, event, Users }) {
  var name = (await Users.getData(event.senderID)).name
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss"); // get time hien tai
  let random = Math.floor(Math.random() * 3) + 1;//random file cache
  var { threadID, messageID } = event;

  var tl = ["Bot cũng đi đây!","Chào cậu nháaa","Chào cậu, tớ cũng đi đây!","Bai cậu, tí mình gặp lại sau nha >.<","Cút đi thg chó!"," đéo tiễn 😏","Tạm biệt, hẹn k gặp lại mày!"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("Bye") == 0 || (event.body.indexOf("bye") == 0)) {
    var msg = {
      body: rand + "\n"+ gio + " rồi đó!\n" + "Goodbye " + name,
      attachment: fs.createReadStream(__dirname + `/cache/byebye${random}.gif`)
    }//dán link ảnh trong cache vào
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }