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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_38_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODksXG4gICAgICAgIDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzLFxuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NixcbiAgICAgICAgOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDQ0LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyLFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoS0w3TDR5dnBQTFI5SEkrbnNJc21RYVNtUVh2RndsbmhUU0VTM28vVDBNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoOWliUUdRVlI1YTBpUWtuQTFHeXZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlNzZjZmU1LTE2N2EtNGQ1Ni1iYWVmLTExMmY1NWRjNmY4MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICA4MSxcbiAgICAgIDk1LFxuICAgICAgMTEzLFxuICAgICAgODEsXG4gICAgICA5MyxcbiAgICAgIDE0OCxcbiAgICAgIDE5NixcbiAgICAgIDE3LFxuICAgICAgNzIsXG4gICAgICAxMTQsXG4gICAgICAyNDgsXG4gICAgICAyMjIsXG4gICAgICAxMjQsXG4gICAgICAxNTEsXG4gICAgICAyNDksXG4gICAgICAyMjYsXG4gICAgICA2MixcbiAgICAgIDk5LFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDI0NCxcbiAgICAgIDQ4LFxuICAgICAgMjQ1LFxuICAgICAgMTU5LFxuICAgICAgMTk5LFxuICAgICAgMTcsXG4gICAgICA2MyxcbiAgICAgIDI0MixcbiAgICAgIDEzMyxcbiAgICAgIDIzOCxcbiAgICAgIDQsXG4gICAgICAyNTMsXG4gICAgICAxMjQsXG4gICAgICA5MyxcbiAgICAgIDQ5LFxuICAgICAgMjI1LFxuICAgICAgMjgsXG4gICAgICAyNTIsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNk1NNkpKQUJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NTI5Nzg1NTo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEyNzg5MTk3MTY5Nzk6ODZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTdGK08wSEVKMlpsclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGemU2QlJoMVlNTW1KWG5vcldEUTZoRTExL05rTUduL1VFLzVBRFJCVGtVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImY0Qk1YSXhMNHNVWTg3OVpkZ1lwV0RlMmRqVG90R0w4S001Ry9WeUF6WHdpSENpVFQ2bGI1d0F6VXZDUDVpK1hRZ2k0M01Wak1FTDNpYUNnZTk1NEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFFM25PU1FGZ2EzNnRsa1VpdXdhNXdOTUhad3BtK0ordjRCU2o5a01LU1NUZjlDNTNaWEVWV0hmSzh6bUdYVW8rUncyYmhsd0wrREFIVVVJcEtsVGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5NTI5Nzg1NTo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMjgzMjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPVDhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9UOC5qc29uIjogIntcImtleURhdGFcIjpcIjJSRkdKUHlZOHdONmE5eFNTRm53ZEM3TS9jdTVxUjcrUTNtYXRqZGw3cW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwOTYxMjY3NCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
