const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const file = path.join(root, 'index.html');
const server = http.createServer((req, res) => {
  if (req.url !== '/' && req.url !== '/index.html') { res.writeHead(404); res.end('Not found'); return; }
  fs.createReadStream(file).on('error', () => { res.writeHead(500); res.end('Could not read index.html'); }).pipe(res);
});
server.listen(8000, '127.0.0.1', () => console.log('TeacherMind AI: http://localhost:8000 (Ctrl+C тоқтату үшін)'));
