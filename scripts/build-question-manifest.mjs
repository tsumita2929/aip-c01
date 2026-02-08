import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const dataDir = path.join(projectRoot, 'data');
const questionsRoot = path.join(dataDir, 'questions');
const domains = [1, 2, 3, 4, 5];

function listQuestionFiles(domain) {
  const domainDir = path.join(questionsRoot, `domain${domain}`);
  if (!fs.existsSync(domainDir)) {
    throw new Error(`Missing directory: ${domainDir}`);
  }
  const files = fs
    .readdirSync(domainDir)
    .filter((name) => name.endsWith('.js'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return files.map((name) =>
    path.relative(projectRoot, path.join(domainDir, name)).replace(/\\/g, '/')
  );
}

function main() {
  const manifest = {};
  for (const domain of domains) {
    manifest[String(domain)] = listQuestionFiles(domain);
  }

  const manifestPath = path.join(dataDir, 'question-manifest.js');
  const content = [
    'window.QUESTION_FILE_MANIFEST = ' + JSON.stringify(manifest, null, 2) + ';',
    ''
  ].join('\n');
  fs.writeFileSync(manifestPath, content, 'utf8');

  const counts = domains.map((d) => manifest[String(d)].length);
  const total = counts.reduce((a, b) => a + b, 0);
  console.log(`Manifest updated: ${total} files.`);
  console.log(`Per-domain counts: ${domains.map((d, i) => `D${d}=${counts[i]}`).join(', ')}`);
}

main();
