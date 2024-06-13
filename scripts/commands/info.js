module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
নাম       : রাজ 
ফেসবুক : রা্ঁখা্ঁল্ঁ রা্ঁজা্ঁ
ধর্ম   :  ইসলাম
ঠিকানা: বরিশাল
ঠিকানা: বরিশাল 
লিঙ্গ.   : পুরুষ 
বয়স           : ১৯+
রিলেশনশিপ : সিংগেল
কাজ        : পড়াশুনা
জিমেইল        :  raj@gmail.com
হোয়াটসঅ্যাপ: wa.me/+8801313186145
টেলিগ্রাম  : t.me/নাই
ফেসবুক লিংক : https://www.facebook.com/profile.php?id=61556664346033`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/61556664346033/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
