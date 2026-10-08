const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const { JSDOM, VirtualConsole } = require('jsdom');

(async () => {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', error => errors.push(error));

  const www = path.join(__dirname, '..', 'www');
  const script = fs.readFileSync(path.join(www, 'app.js'), 'utf8');
  const html = fs.readFileSync(path.join(www, 'index.html'), 'utf8')
    .replace(/<link[^>]+rel="stylesheet"[^>]*>/g, '')
    .replace('<script src="app.js"></script>', `<script>${script}</script>`);
  const dom = new JSDOM(html, {
    url: 'https://mystic.local/',
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole
  });

  await new Promise(resolve => dom.window.addEventListener('load', () => setTimeout(resolve, 100)));
  const doc = dom.window.document;
  const tarot = doc.getElementById('tarotCard');
  const rune = doc.getElementById('runeCard');

  assert.ok(doc.getElementById('date').textContent, 'date renders');
  assert.equal(rune.disabled, true, 'rune starts locked');
  tarot.click();
  await new Promise(resolve => setTimeout(resolve, 20));
  assert.ok(tarot.classList.contains('revealed'), 'tarot reveals on click');
  assert.equal(rune.disabled, false, 'rune unlocks after tarot');
  assert.match(doc.getElementById('tarotArt').getAttribute('src'), /^assets\/tarot-green\/.+\.jpg$/);
  rune.click();
  await new Promise(resolve => setTimeout(resolve, 50));
  assert.ok(rune.classList.contains('revealed'), 'rune reveals on click');
  assert.equal(doc.getElementById('reading').classList.contains('hidden'), false, 'reading is displayed');
  assert.ok(dom.window.localStorage.getItem('mysticDaily'), 'daily result persists locally');
  assert.equal(errors.length, 0, errors.map(error => error.message).join('\n'));
  process.stdout.write('Mobile app smoke test passed\n');
  dom.window.close();
})().catch(error => {
  process.stderr.write(`${error.stack}\n`);
  process.exit(1);
});
