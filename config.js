
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61VyY7bRhD9laCvEjxcxE3AAGkuEqmFpEYbpSCHFtmkKHET2VooQ4APQZBDLvmJGLkFcC75kxnnZwJqsQewM5kA4YXV3cWq96rrFd+CJA0L3MUlaL4FWR7uEMGVScoMgyaQt76Pc1AHHiIINAHqycVmuIbbiFiUWno0FOlJe7zhJw9odZRoIpv8XDEbJru+B6c6yLaLKHRfCLhwDHuEMkVQFsuOQbPcMfJ3PRr6rQM86N5BVv2hzUKTk2f34FRFRGEeJoGWLXGMcxR1cWmjMH8d/G3/YV5Sm6SVjBfLjWgFFl1r49ERlz0UOJHTJnebaOpEXEK9Dn4SHGGuMoIz5qMtrNGJeaz5a3G8VC2HBPPBIO7LljpRi2F6gV+EQYI9w8MJCUn56rrvzZVgmpGabeCQEbOtktWkttygcmGQqZSbsQ8ph8a8dbcOXgf8kMX9BIuRPLMtDfeMw4ToD6mSrw6bO6UPZw+e6Dnhvk8p4+fA7fzWK+v/Uve1ZgYpMy3Rrrsw5kNXaejQmMR8wii7ET+/26F12lu7oz0lvg6+22aX+mKPDbE/kSluZsVtzGwzo3WYUbUiU4aqaI+YA2/B4jN8RLb5SyjntmdRQs+f6DnWV4659OB6CgNe3c5Zx2bkqR8PGH88ZMxjshaCCRvHUTHluc7IVsdFvt7BDjM1NnpaE7QGHLMj9uiH+/szozUuDQ806VMd5DgIC5IjEqbJeY+pA+TthtjNMTlXF9SOqdohoTn1nLnF9iVfHwVwNso7Zalyw/YAxjqtcsZstyzuQR1keeriosCeHhYkzcs+LgoU4AI0vztfVMU5x3FKcCf0QBNIDCtQksSIgih9W7zZLxEpUJa9STABdeDnadzHoEnyLa6D8wewJWoyxctQERsQ0lBkKuE3WgorqYrGqhXD+JJ0FMa4ICjOQJMWOI4WeJbjT/X/B4em8QKj8jIjKw1B0HiKo1iKb8ia1mIVSpJfxsHzp+/rIMEHcmnjqvgsXQd+mBdknGyzKEXercdvh8h1021ChmXiKpWBc9B8to0JCZOgqJhtE5S7y3CHlYoHaPooKvCn+8Y59m5crjNMSb2qDSXIqnNJoEGFvQr0RW2aDPdleRJUeYPHD0/vnn5/evf05+X9+P7x16cfrvYf39zMj798/O3m8M3j+6cfr4sPlf9fP1+dfgJ1EJ3TM7QkipxECw1RoCmuQlAdnD4xr4B6mKAwKkATKF1eXnWLlmYwgiQO2m1IBVAJIPhcqZsALx0ecW5aW+2tbujS09yRPS1IN2ngzcTRjI2OfNsKO0jEXjql7r8SBDRBpzPI++6wrOWZuJjc3ZlLzdXp9QY1FvJScIxxG/pkV/PveDLS3KNzTFt7ZSYxAtPAQX82N6eRG9hsetzVfLkXmemDcoCVWuvAw7vQxc+T6WmGE/EQ14bOFkO7NHv7xfhgTgTRpiS71lrsnI7b2FvKUtOFoyKErhU4uN9ocCuKuZtM4yIZmHNd6K5qbYbq1VjGTwN4GQ3n0RRdfwnhVbXheemH+Dxhr3f9rz1xAV61LnWqP4txndn/MPfkOXa6diqqYZqYkw29dx6Mbndj6FNbY0zOrS1XaTjd6QlqEXCqNJRFiPhpHoMmKOIFAnWQp9tKCEbipy9kUqBhKFfaESoI/Cyur+i1IVy87DzNdFQsQRPY0zUnV0IpYZYNCSI3qQJYPVZxBKe/AXZ8/nPUCAAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
