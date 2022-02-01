import Parser from "rss-parser";
import { readList } from "../utils/fileHandler.js";

async function fetch(ctx) {
  const args = ctx.update.message.text.split(' ');
  let parser = new Parser();

  args.shift();

  let source = readList('rss.json', args[0]);

  source.feeds.forEach(async (f) =>{
    let feed = await parser.parseURL(f)
    feed.items.forEach(item => {
      ctx.reply(item.title + ':' + item.link)
    });
  });
}

export default fetch;
