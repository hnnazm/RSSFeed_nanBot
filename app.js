// const { Telegraf } = require('telegraf')
import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import help from "./commands/help.js";
import list from "./commands/list.js";
import add from "./commands/add.js";
import fetch from "./commands/fetch.js";

dotenv.config()

const bot = new Telegraf(process.env.TELEGRAM_HTTP_API);

bot.start((ctx) => ctx.reply('Welcome'));

bot.help(help);
bot.command('list', list);
bot.command('add', add);
bot.command('fetch', fetch);
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
