import { writeList } from "../utils/fileHandler.js";

async function add(ctx) {
  const args = ctx.update.message.text.split(' ');

  args.shift();

  if (args.length >= 1)
    writeList('rss.json', args[0], args[1]);
}

export default add;
