import * as fs from 'fs';
import * as path from 'path';

async function list(ctx) {
  const fp = path.join(process.cwd(), 'rss.json')

  fs.readFile(fp, 'utf8', (err, contents) => {
    if (err) {
    console.error(err);
    return;
    }

    try {
      const jsonString = JSON.parse(contents);
      for (let i = 0; i < jsonString.length; i++) {
        ctx.reply(`${i + 1}. ${jsonString[i]}`);
      }
    } catch (jsonError) {
      console.error('Error parsing JSON: ', jsonError);
    }
  });
}

export default list;
