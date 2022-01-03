import Parser from "rss-parser";

async function fetch(ctx) {
  let parser = new Parser();

  let feed = await parser.parseURL("https://www.reddit.com/r/Python/.rss");
  ctx.reply(feed.title);

  feed.items.forEach(item => {
    ctx.reply(item.title + ':' + item.link)
  });
}

export default fetch;
