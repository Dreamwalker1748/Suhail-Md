const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" 
global.waPresence= process.env.WAPRESENCE ||  "" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_23_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICA5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTExLFxuICAgICAgICAzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MixcbiAgICAgICAgMTk5LFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaM0J3VVpoRHgyeUkxWk9KaDhlNGpIS2xTNGNzMUpiekV3REtKaEc2YTFJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfMjdMQUxON1FyU1ZXLWxacmJvOE93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI2MGIxNzY3LThlYzAtNDU2NS05MjdhLWZlZjY3ZTcxYmFkNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAyMzgsXG4gICAgICAxMDUsXG4gICAgICAxNzgsXG4gICAgICAyNDAsXG4gICAgICA5NCxcbiAgICAgIDEwMCxcbiAgICAgIDE1NCxcbiAgICAgIDIzNixcbiAgICAgIDcwLFxuICAgICAgOTgsXG4gICAgICAxMzcsXG4gICAgICA0NCxcbiAgICAgIDcyLFxuICAgICAgMjM4LFxuICAgICAgMTYsXG4gICAgICAxNDMsXG4gICAgICAzNyxcbiAgICAgIDIxNyxcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICA5MyxcbiAgICAgIDE4NSxcbiAgICAgIDE0OSxcbiAgICAgIDIyMixcbiAgICAgIDIxOCxcbiAgICAgIDIyMCxcbiAgICAgIDEyOCxcbiAgICAgIDE5MCxcbiAgICAgIDE5OSxcbiAgICAgIDIxMixcbiAgICAgIDI1MSxcbiAgICAgIDIwNyxcbiAgICAgIDMyLFxuICAgICAgMTc3LFxuICAgICAgNTUsXG4gICAgICAyMTMsXG4gICAgICAyMDksXG4gICAgICAyNDMsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMU02WEU5QVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwMDUzMDczNzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU1NTc2ODUyMDQ2MDU0OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0piQjRPc0dFSUt1bHJRR0dCSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN1NsbGd3V3FQeGNPN1NiTHpLdmlJQVV0RDMrWGpJYWxwalh5UFNzV1RIST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLT3p3ckNEVDJPM2JHWitNelpaN2VZaHl4UVJCdzV0UFVPSTJydG5PNGZBU3dYemVTanZra3V5dkJjWkFwZStlcUFDdGtNSG1Fdkp0eEkvZ1ova0tBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCQ3ZObFF0NXVscDEwTWZRa3pETVlOVktmRmEwRHFzSklwZk1jT0dkM3NTa1FnMi9GMW1KRnVWNXV0MEZsbDRIbGlSb2ttMjM0Qi9QTFVvK0JPeXZCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDA1MzA3Mzc6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDMwOTgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVdBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNV0EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5VTNES2hNQURVK05yZC9oS0RPR1AyUllSOEwvNTR3MThwZnNIVnV1K3BrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MzY1ODkyMDYsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDEzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3NTc0NzY0NTBcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.3",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ROYAL QUEEN ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  // aitts_Voice_Id : process.env.AITTS_ID || "37",
  // ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
