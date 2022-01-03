import * as fs from 'fs';
import * as path from 'path';
import { writeList } from "../utils/fileHandler.js";

async function add(ctx) {
  const args = ctx.update.message.text.split(' ');

  args.shift();

  for (let i = 0; i < args.length; i++) {
    writeList('rss.json', args[i]);
  }
}

export default add;
