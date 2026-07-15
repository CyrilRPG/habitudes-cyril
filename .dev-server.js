// Local static server for previewing the app (dev only — not deployed).
const http = require("http");
const fs = require("fs");
const path = require("path");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json",
  ".json": "application/json"
};
const root = __dirname;
http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split("?")[0]);
  if (url === "/") url = "/index.html";
  const fp = path.join(root, url);
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); return res.end("404"); }
    res.writeHead(200, { "Content-Type": types[path.extname(fp)] || "text/plain" });
    res.end(data);
  });
}).listen(4599, () => console.log("Preview server on http://localhost:4599"));
