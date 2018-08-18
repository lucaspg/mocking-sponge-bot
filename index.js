const { Composer, log, session } = require('micro-bot')

const bot = new Composer()

bot.use(log())
bot.use(session())

const mock = (s) => s.split('').map((c) => (Math.random() > 0.5) ? c : c.toUpperCase()).join('');

bot.hears(/\/dingus (.+)/i, (ctx) => ctx.reply(mock(ctx.match[1])));

module.exports = bot
