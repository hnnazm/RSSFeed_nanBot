import * as fs from 'fs';
import * as path from 'path';

function readList(filename, title='') {
  const fp = path.join(process.cwd(), filename)
  const source = JSON.parse(fs.readFileSync(fp, 'utf8'));

  for (let i = 0; i < source.length; i++) {
    if (title.toLowerCase() == source[i].title.toLowerCase()) {
      return source[i];
    }
  }
  return source
}

function writeList(filename, title, payload) {
  const fp = path.join(process.cwd(), filename)
  let source = readList(filename);

  source.forEach(s => {
    if (title.toLowerCase() == s.title.toLowerCase()) {
      s.feeds.push(payload);
    }
  });

  source = JSON.stringify(source, null, 2);

  fs.writeFileSync(fp, source);

  return
}

export { readList, writeList }
