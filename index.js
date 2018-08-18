const { Composer, log, session } = require('micro-bot')

const bot = new Composer()

bot.use(log())
bot.use(session())

const spongeMock = (s) => s.split('').map((c) => (Math.random() > 0.5) ? c : c.toUpperCase()).join('');

bot.hears(/\/spongemock (.+)/i, (ctx) => ctx.reply(spongeMock(ctx.match[1])));

module.exports = bot
