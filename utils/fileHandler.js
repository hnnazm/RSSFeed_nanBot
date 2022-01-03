import * as fs from 'fs';
import * as path from 'path';

function readList(filename) {
  const fp = path.join(process.cwd(), filename)
  const source = JSON.parse(fs.readFileSync(fp, 'utf8'));

  return source
}

function writeList(filename, payload) {
  const fp = path.join(process.cwd(), filename)
  let source = readList(filename);

  source.push(payload);

  source = JSON.stringify(source, null, 2);

  fs.writeFileSync(fp, source);

  return
}

export { readList, writeList }
