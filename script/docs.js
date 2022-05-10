const stylus = require("stylus");
const fs = require("fs");
const path = require("path");
const http = require("http");

let docStylusFile = path.resolve("./docs/stylus/doc.styl");
const generateCss = function () {
  stylus.render(fs.readFileSync(docStylusFile, "utf8"), function (err, css) {
    if (err) throw err;
    fs.writeFileSync("./docs/style.css", css, { encoding: "utf8" });
  });
};
fs.watch(docStylusFile, function (eventType, filename) {
  generateCss();
  console.log(`监控到 ${docStylusFile} 有变动，更新 doc 样式文件`);
});
fs.watch(path.resolve("./src"), { recursive: true }, function (eventType, filename) {
  if (filename.indexOf(".styl")) {
		generateCss();
    console.log(`监控到 stylus-shortcut 有变动，更新 doc 样式文件`);
  }
});
generateCss();

const serve = http.createServer(function (req, res) {
  let staticFile = path.resolve("./docs", req.url.replace(/^\//, ""));
  if (!fs.existsSync(staticFile) || fs.lstatSync(staticFile).isDirectory()) {
    staticFile = path.resolve("./docs/index.html");
  }
  var extname = path.extname(staticFile).replace(".", "");
  const extMap = {
    js: "text/javascript",
    css: "text/css",
    jpeg: "image/jpeg",
    jpg: "image/jpg",
    png: "image/png",
    svg: "image/svg+xml",
  };
  var contentType = extMap[extname] || "text/html";
  fs.readFile(staticFile, function (err, content) {
    if (err) {
      res.write(JSON.stringify(err));
      res.end();
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.write(content);
    res.end();
  });
});
serve.listen(3000, function () {
  console.log(`Server running at http://127.0.0.1:3000/`);
});
