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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kenya/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b86d7e8670ff9cb4d0a8d.jpg " ; // SET LOGO FOR IMAGE 



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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_22_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDksXG4gICAgICAgIDkxLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg1LFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEWE9pWGFnQWl6TkZCZ3dNVDh5VHBNazhqa2JpRnZudE5sUFJlWVpWQ3pBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5NTI5Nzg1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDE4MDE5NzJBMzc5RkZBRTAwMjAxMkU0OEQ1QjFBQjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzEzNDIxMzI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdCR24xWUd2UnQtUzhpenhrMk9XTlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzFmMmM0MTMtNGRkMy00OTkxLTlmZjctYTUyNmUwYzE0ODE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDM2LFxuICAgICAgMjUyLFxuICAgICAgMjMwLFxuICAgICAgMjQsXG4gICAgICAyMTYsXG4gICAgICAxNjUsXG4gICAgICAyMzcsXG4gICAgICA5MCxcbiAgICAgIDE3MixcbiAgICAgIDEyMSxcbiAgICAgIDIwMSxcbiAgICAgIDgzLFxuICAgICAgOCxcbiAgICAgIDYxLFxuICAgICAgMixcbiAgICAgIDgxLFxuICAgICAgNyxcbiAgICAgIDE3MSxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTI3LFxuICAgICAgMTM4LFxuICAgICAgMTgsXG4gICAgICAxNyxcbiAgICAgIDEyNSxcbiAgICAgIDE5NCxcbiAgICAgIDYwLFxuICAgICAgMTQwLFxuICAgICAgODIsXG4gICAgICAyMzIsXG4gICAgICA4NyxcbiAgICAgIDEyLFxuICAgICAgMzMsXG4gICAgICA0MyxcbiAgICAgIDIwMCxcbiAgICAgIDEzNCxcbiAgICAgIDIxNSxcbiAgICAgIDExNCxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1FEWFlDM1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NTI5Nzg1NTo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEyNzg5MTk3MTY5Nzk6NDlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQ0hBRFdJQ0sgSE9SQUNFIOKcqPCfkqtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdkUrTzBIRUlqNGdyRUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZ6ZTZCUmgxWU1NbUpYbm9yV0RRNmhFMTEvTmtNR24vVUUvNUFEUkJUa1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWjd1K0VkMitzZkFWZnpjcWZ2WFVoN0lCU0tUQXVwb3N5bFJlRUF0YWtTZlFyNUx6dkRwRTdFa1pMdEhLa0N1cVRXRldZS3lHWEtaYkF1R0pXNkFxQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYUpoclh2RUszT0FBQm9uSXY3c0dLbzNZSFlnNnozWEd0d1JwNG9LU2YrcHNQSWkwN3dsR3EySG1tbThmUC91QloxMVJuTFd6Zldpb0xzVVJGVWZ4Q3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk1Mjk3ODU1OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxMzQyMTMyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9VZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1VkLmpzb24iOiAie1wia2V5RGF0YVwiOlwidDJaMUlLcTBEY0dRSDJVU1h1YWVVZ0gwV2J2Q1BwWXZnK1hSNDZNQlJYWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA5NjEyNjY1LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCw5XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CHADWICK HORACE ",
  packname: process.env.PACK_NAME || "CHADWICK HORACE ",
  botname : process.env.BOT_NAME  || "CHADWICK HORACE ",
  ownername:process.env.OWNER_NAME|| "CHADWICK HORACE ",


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
