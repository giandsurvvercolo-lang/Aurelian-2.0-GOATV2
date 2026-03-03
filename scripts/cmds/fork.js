module.exports = {
  config: {
    name: "fork",
    aliases: ["repo", "link"],
    version: "1.0",
    author: "shanto",
    countDown: 3,
    role: 0,
    longDescription: "Returns the link to the official, updated fork of the bot's repository.",
    category: "system",
    guide: { en: "{pn}" }
  },

  onStart: async function({ message }) {
    const text = "https://github.com/XSY-SHANTO-bbe/XsYshAnTo-2.0-GOATV2.git";
    
    message.reply(text);
  }
};
