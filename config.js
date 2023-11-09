const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '918593848438'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giyutomioka:12341234@cluster0.dsas7er.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'aynne87@gmail.com'
global.github = 'https://github.com/Keralaprofessor/BLADE-MD'
global.location = 'Kerala India'
global.gurl = 'https://instagram.com/sh4.m.eem/' // add your username
global.sudo = process.env.SUDO || "918593848438"
global.devs = '918593848438';
global.website = 'https://github.com/Keralaprofessor/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://te.legra.ph/file/dfafe14809de1a5b0c0dc.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BPcmJtYW1Cc2xuR0oweWEwbkFEZmZDZEQrMVVMcmVRdHdqdk0xRmVtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWdiQ3FkdFdOd25tZjVVNGNjSCtnNG9LdWNUU0FKVnJGejZSY0lodCtYVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTXpJbmJ6SmRUWFBOTEQ2c002MlduS1puemdQZk54bFVEd01Ua2NZOW1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrbU96Mjl4cTc3bnJwWVdSNUZPSTRGMEJrN1JTdUtJQ0tzZC9Hdlh6UzA0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNd0xqd0NLMjJwSFErNklkVktkMVlSN3lJTHB0bmJpV0o0bVY0MS9TRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt4RUpaYzlaSWw2dURtQnAwaUwxdmhIb0dIN2hyZ3NWQllTWVFPdWxSbDg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDOHZ6amRZY3djNmQ3dWNIbHhRcW82dkZhb0JuU2NCSUFYMEEvVURPQ1pDMll6VHdzNDRHdFJ4ejFDcmc1QkVYalkzd0dGYlNaOERxdzdVM0UwUUVDdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIzOCwiYWR2U2VjcmV0S2V5IjoiUld3QWYwbk5iM0lLWWlJMlk5cElNbzVLTE5CRUZSTHhlbWdvYTZxRE1ybz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiakQyZElUbEJTcS10TDVqQTBGeUxpZyIsInBob25lSWQiOiIyNGJkYjI0YS02NmMzLTRlZjAtYTcxZC04ZGZiYTFjNDM5NjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEhzUnZzd0RzVDhaMUxIVXU1TlRVUVdSbjJjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RVk5RnNFdlVpSEJOSUhrTzQ5YWtwbkVqSVU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZmlvTVVIRVB2SnNhb0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImgrcXNWODB1cWRvMWNtOCtiMkhneFFCb3YwUWJKSFVzeUkwRlBLZ0NjUjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZFZTFxSnhmWXBpM0F4S2RuRjhKVnhJUGZhbThaSGlnTURSYlB5a3F0d0s0RDQyUVFENFV4K1JJMHVWSXhBajZBYm4zU1RTR2RGT1hBTUg1N3ArL0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4TDAvbklVMWlYSVNqdzFvWTFDbktUa0tJVXJQanpnVXhabUpLVDRzMHBuVHVDKzh2YXhWdEd0OVBPNndDUHJQUUdBdFdLQzgrUDZNdHdlTEk0dnRBZz09In0sIm1lIjp7ImlkIjoiOTE5OTYxNDUwMzUxOjM0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmbfwnZm+8J2agfCdmbjwnZm88J2ZuPCdmbTwnZm0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTk2MTQ1MDM1MTozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZZnFyRmZOTHFuYU5YSnZQbTloNE1VQWFMOUVHeVIxTE1pTkJUeW9BbkVmIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk5NTA1NDA1fQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'IZUMI BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SHAMEEM SER',
  
  botname:   process.env.BOT_NAME === undefined ? "IZUMI-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'shameem' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'oi im a public bot made by shameem ser': process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜᴀᴍᴇᴇᴍ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
