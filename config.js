const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kenya/Nairobi ";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ac8cb38b4cce31ba1bbf4.jpg " ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254795297855 ";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_36_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDY1LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgODgsXG4gICAgICAgIDYsXG4gICAgICAgIDIwLFxuICAgICAgICAzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI2LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTEwLFxuICAgICAgICA5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaFAwK3NSZnBXTVhXeTdFTjAwZ0pFWDRtcGQxbnQ5NVBNSEpQWmNHMGtHZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMG1MRjBVSGRSZzJYVDNmdE9wLWN4UVwiLFxuICBcInBob25lSWRcIjogXCJkMmVmMjg1Ni1hOGYzLTQ0MzMtODM4MC04M2QyZTBjNjY3MmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAxNTQsXG4gICAgICA0NCxcbiAgICAgIDM0LFxuICAgICAgMzMsXG4gICAgICA1MyxcbiAgICAgIDE1NCxcbiAgICAgIDEwLFxuICAgICAgMTgxLFxuICAgICAgMTA0LFxuICAgICAgMTg1LFxuICAgICAgMTQzLFxuICAgICAgNDEsXG4gICAgICAxOTEsXG4gICAgICAzMyxcbiAgICAgIDYzLFxuICAgICAgNDYsXG4gICAgICAyMTgsXG4gICAgICAxOTAsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxNixcbiAgICAgIDI0NixcbiAgICAgIDExNSxcbiAgICAgIDEyNyxcbiAgICAgIDE2LFxuICAgICAgNDgsXG4gICAgICAyMDMsXG4gICAgICAyMDIsXG4gICAgICAyMTksXG4gICAgICAyNDIsXG4gICAgICAxMjQsXG4gICAgICAxNzcsXG4gICAgICA1MCxcbiAgICAgIDk2LFxuICAgICAgNjgsXG4gICAgICAyMzMsXG4gICAgICAxODIsXG4gICAgICA0MyxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHTFE1OVROOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzkxNDIxNDE0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKZXBveSBzaGFybWFcIixcbiAgICBcImxpZFwiOiBcIjExMTIwMTIzMzE1NDExNToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmZ3pvY0dFSjNUZzdFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSnVGNmJUMjRjQXJnUkJCYWNrUmMwTFdLZmlRdWg4WWozQk1hdlMwSHRCbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHeEpVRzJyS3Ztc01TNmd3ZFhHb1J5TkdhYjFVMncxWUJvU0FoSXRmSjhHZlRqUXZpSmIxUWFGa01PQlAvMHNDTEFQMzQ1VEtVbEtrODlQNFJURnBCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvNEF2L1dnMGM3UHZrUE03bWkwcTNxK20vcW5RdUdTa2VkVk44REMxODJMN3F2OW1nMk82MWRaV2RsNWo2VzMyUEpNb1M4Zm5Id1BtUk9ybzdTODlqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTE0MjE0MTQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM0MzI5OTNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CHADWICK HORACE ",
  packname: process.env.PACK_NAME || "CHADWICK HORACE ",
  botname : process.env.BOT_NAME  || "CHADWICK HORACE ",
  ownername:process.env.OWNER_NAME|| "JOHN JEPOY SHARMA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
