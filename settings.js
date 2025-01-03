  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJzY0UvaWVjd1E4NzFlN055ZWdiUnFDQ0JtZ0hldzhEU2lFS1B2b2RYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEI0SElvOVJzNVI0c2FlR1RUVUU5UUNjT2MxZ1BRYlZBelI1Y3Q0c1htdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RW5tQlpvaWo0Q2xvK0VEOEFpcFdSZFp3ODRmSTJMY3IvY1Q3dGVHclU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtaW0xcHBaOVE3UzZWQ0ZkSnl5SlFBSy85Uk5iS1JmQ0ExRUhUeld2c2pFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZKMmdFclB6Wnl4WGYyUUsxdlArQlNTTVFNOXd6V0dxaGp4WkdVVE80MVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZab0FGelphMS92RzkwNmxwVlpLVjNja3FCZGFMOVV4OGdKTHFMQ2N1QjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BUM01lWHdJMjNYR3pzQ2YzdjFESzBQaFBPeXZDV0JYRWpvZTliNkoxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzBYb2UyQlBETHJMbzhwRC9Vd2ZLTVAvTzFsb0VWR3BWYzZWaUpZcU5UQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB0SjczRkVCak9FWjVSem1oUmx3c0NTN0VGMnlmOVVSTmQ4ZkFSSGdKNkFvNkFELysvdHhsV0Y0aEVlTUF5blpuQlhGZmplakgvUnJGZmxrbENrSmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiIwcTNsUDZPTEJGYm5jOUNqaXZrNER3S045TFpxWEN4NUpBWDVqd0YzV3I4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIyODI5Mzc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQwRDc5Q0Q2OTc2MTI4MDdBRDcxOTkzMzg3RDEzMjEyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU3ODQ0MTN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIyODI5Mzc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhCRjI0MTcyRDIyNkNBQjQ3NEJBRTVEN0RDNUIwMTE3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU3ODQ0MTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklrMkR6SnA2UjBtNHBCTFFEWGF2bnciLCJwaG9uZUlkIjoiZGQyYzg2ZmItYmY1Ni00Mzk1LTg5ZjQtNTMzMzFlZDU4NTJlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ5WEtiQWtoNWpaSHN3bHZOdUFQb21UdVVXUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJicUZDNUJoVUNSdlIzMkZZUjc2Z3ZBQmVGVDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNTg1MUdMMVgiLCJtZSI6eyJpZCI6Ijk0NzIyODI5Mzc3OjUwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImtrZ3JzYWRhcnV3YW43MCIsImxpZCI6IjEwMDk3OTU0NzAxNDY1OjUwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmVoN3NjQkVNN3YxN3NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMjJBVlBHSFl5bHo1cys4VHBwd3RvQUVJOGNhOWdNTVBNbExDcndFSFpsdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidUs0dkMybngwaWJwelpxSGVCek9yWTV1aXZLUnoxcHRoK29EYkRrRU0vOWQ3S2hGRHNHSmhPZjFLTWdiWW01VnkrajBkaWdER3NBdjZwaWgwZFpRQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlhjRXp6eHlIVytOclBLNDdEWTdUZ2JJenFuWWMyVWtIUmZ5bXJmd3FJVWJQclNuVExaSncySWw5VXkyRTJWZmtwQjlNNmhhclRZcVljRVhMU0RBSmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjI4MjkzNzc6NTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHRnRlR4aDJNcGMrYlB2RTZhY0xhQUJDUEhHdllERER6SlN3cThCQjJaYyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTc4NDQxMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGaEYifQ==' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || '᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '254754783972' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'Tylor' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "᙭ᑭᒪOᗩᗪᗴᖇ" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "ᗷOT" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🙂'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '254' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
