import * as fs from 'fs';
import * as path from 'path';

async function add(ctx) {
  const args = ctx.update.message.text.split(' ');
  const fp = path.join(process.cwd(), 'rss.json')

  args.shift();

  fs.readFile(fp, 'utf8', (err, contents) => {
    if (err) {
      console.error(err);
      return;
    }

    try {
      const rssList = JSON.parse(contents);
      for (let i = 0; i < args.length; i++) {
        rssList.push(args[i]);
      }

      const rssJson = JSON.stringify(rssList, null, 2);

      fs.writeFile(fp, rssJson, (err) => {
        if (err) {
          console.error(err);
          ctx.reply("Failed to add source 👎");
        } else {
          console.log(`Source added: ${args[i]}`);
          ctx.reply("Source added! 👍");
        }
      });
    } catch (jsonError) {
      console.error('Error parsing JSON: ', jsonError);
    }
  });
}

export default add;
