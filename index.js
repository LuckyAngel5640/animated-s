const { Client } = require("discord.js-selfbot-v13")
const client = new Client();
client.once("ready",async () => {
    setInterval(async () => {
           client.user.setStatus("online")
           setTimeout(async () => {
client.user.setStatus("idle")
}, 20000)
setTimeout(async () => {
client.user.setStatus("dnd")
}, 40000)
    }, 30000)
})
client.login("")
