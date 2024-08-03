//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "adamsandra8056.gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/BADBOI-v1/Queen-BHAD-DC-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/dad04122a49867dffb830.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349159896402";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/53353f917aa29807b8a64.jpg,https://telegra.ph/file/9f7c67312af37da75d47e.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxYMW5ic0FiVERKUlpaK3FkOVk0S1B3SWc2ZG04UlU5RWowdS9WciswND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHVFc1dEZWdkOUVHV3dxTWhXMk9kcXBOVkRkQ2FacFZYeUkyV2xoTzNXaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QW1XZjVzQlZGWG9obytHNjRsZDEyTk8rdnIxK2hDeFBwVTJ5eXZoSEZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSTNTcTBaV3FnRjhYdFA2UDI3MzRSTkZ3Z0UwdkJHdHNFMlJqaGlpSFJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKU21ZemlJZjlGS3htWHhVUWYxSmJUTUtQNUZIQnNwRE5NZC9JR21uSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlFdVZlV243MDY2YU5aNmY1dnA1NXp4eFVFUk8xdFlJVXJwN01mWDF4RXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZpdTAzb0Q2QXMxaWRibGN2d1NJTzdObXpLRjcwa3pVYytlRk5uYjJFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzJ0OTFTVndFbE56NHVORjl3ZmZoVkcwZ1g1U3dvbDdwUE8wVTVNSkJRWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1rb0MvckF6dVZBR04zUzA4RDJubE9sNWJ6NkVzcmo1bXlHRnN4eENOQ01HekNDKzNoZFJqTHBFaHppdnlVZUdvaHZJcFBnaTlqWGMwQnVZTVJ1T0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiI5NStsYnlyUVpCL25IVVN6N0psanlKVk5oSDVRdjJTKzN5bDhDSlMzeUlJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPUGFnYTR4RlQ1cUpuVlNyTXNVLTZBIiwicGhvbmVJZCI6ImJhNjE1YmNmLTIxNDctNGQ2Zi1iMjY5LTRlOWJmYzlmOGYxZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIva3ZRMDZIYnFVcHVHL2drSDJUdXlISU9tSWM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpLL1pUZWhlNUhBbDFOUExnVExQZWUySFptND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l5NDN2QUNFTkNKdXJVR0dDSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhJZXYzdWR0NXdNcmdiOWRud1ZaYU5zRktVek9BU3NMclJXUzduTlE4bFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikh1MTF2MXJCZWlZcEg5WWxQSUZpMUJzVzZ1V0hLVkhqWmpLNjI1WjZBS3MvT0gyZnBuZlRHbkRWTE0vaUY5bUxJYjgzdkZWazNQdkEyZy93ZGRQMWdnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVbzljd1Q2ajFHNXVyZnZBK0tYZHRMQzNPa0pqNTNDWU1rY2Z6Rjc2ekU1RWJxeFB5WEdUUGRhSVA0NkZ0aFNPcVJVVUQ0STNRYjRPbUdrUFRGVnBCUT09In0sIm1lIjp7ImlkIjoiMjM0OTE1OTg5NjQwMjo5NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI0OTAzMTA2MjIxMjYzNjo5NEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE1OTg5NjQwMjo5NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjU0hyOTduYmVjREs0Ry9YWjhGV1dqYkJTbE16Z0VyQzYwVmt1NXpVUEpVIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjcxMzMwOSwibGFzdFByb3BIYXNoIjoiMXY0QTZjIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNM2gifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Hardeaymorlar Bot💙🔐",
  author: process.env.PACK_AUTHER || "Ademola❤️",
  packname: process.env.PACK_NAME || "Ade❤️",
  botname: process.env.BOT_NAME || "ADEMOLA❤️🔐",
  ownername: process.env.OWNER_NAME || "Ademola💙🔐",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "B H A D").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
