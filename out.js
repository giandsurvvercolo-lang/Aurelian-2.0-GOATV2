this example 

module.exports = {
  config: {
    name: "out",
    version: "1.0.2",
    author: "𝙺𝚞𝚛𝚊𝚙𝚒𝚔𝚊",
    countDown: 0,
    role: 1,
    category: "owner",
    hasPrefix: true,
    aliases: ["leave"],
    guide: "{pn}"
  },

  onStart: async function ({ api, event, message }) {
    const { threadID } = event;
    const botID = api.getCurrentUserID();

    try {
      await message.reply("╭━━━━━━━❍\n  👋 𝙶𝚘𝚘𝚍𝚋𝚢𝚎! 𝙻𝚎𝚊𝚟𝚒𝚗𝚐 𝚐𝚛𝚘𝚞𝚙...\n╰━━━━━━━━━━━━━━━❍");
      return api.removeUserFromGroup(botID, threadID);
    } catch (e) {
      return message.reply(`╭━━━━━━━❍\n  ❌ 𝙴𝚁𝚁𝙾𝚁: ${e.message}\n╰━━━━━━━━━━━━━━━❍`);
    }
  }
};
