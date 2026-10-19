// QA static server: serves the Vercel static output with clean URLs, and stubs POST /api/quote.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(process.argv[2] || '.vercel/output/static');
const port = Number(process.argv[3] || 4321);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain', '.ico': 'image/x-icon', '.json': 'application/json' };
export const leads = [];
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/api/quote') {
    if (req.method !== 'POST') { res.writeHead(405); return res.end(); }
    let body = ''; req.on('data', (c) => (body += c)); req.on('end', () => {
      leads.push(body); fs.appendFileSync('qa/leads.log', body.slice(0, 500) + '\n---\n');
      const json = (req.headers.accept || '').includes('json');
      if (json) { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify({ ok: true, id: 'TT-QA', delivered: false })); }
      else { res.writeHead(303, { location: '/thank-you?nojs=1' }); res.end(); }
    });
    return;
  }
  let p = decodeURIComponent(url.pathname);
  const cands = [p, p + '.html', path.join(p, 'index.html')];
  for (const c of cands) {
    const f = path.join(root, c);
    if (f.startsWith(root) && fs.existsSync(f) && fs.statSync(f).isFile()) {
      res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream', 'cache-control': c.includes('/_astro/') ? 'public, max-age=31536000, immutable' : 'no-cache' });
      return fs.createReadStream(f).pipe(res);
    }
  }
  res.writeHead(404, { 'content-type': 'text/html' }); fs.createReadStream(path.join(root, '404.html')).pipe(res);
}).listen(port, () => console.log('serving', root, 'on', port));
