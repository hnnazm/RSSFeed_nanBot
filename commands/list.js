import { readList } from '../utils/fileHandler.js';

async function list(ctx) {
  const args = ctx.update.message.text.split(' ');
  let outputString = '';

  args.shift();

  outputString += `======= RSS Sources =======\n`;
  if (args.length >= 1)
    readList('rss.json', args[0]).feeds.forEach((l, i) =>
      outputString += `${i + 1}. ${l}\n`)
  else
    readList('rss.json').forEach((s) => {
      outputString += `${s.title}\n`;
      s.feeds.forEach((l, i) => outputString += `${i + 1}. ${l}\n`)
    })

  outputString += `=========================\n`;

  ctx.reply(outputString);

  return
}

export default list;
