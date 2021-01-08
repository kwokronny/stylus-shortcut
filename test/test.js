const stylus = require("stylus");
const fs = require("fs");
const path = require("path");
// const http = require("http");
stylus.render(fs.readFileSync(path.resolve(__dirname,"test.styl"), "utf8"), function (err, css) {
  if (err) throw err;
  fs.writeFileSync("./docs/style.css", css, { encoding: "utf8" });
  // res.end(css);
});

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   stylus.render(fs.readFileSync(__dirname + "/test.styl", "utf8"), function (err, css) {
//     if (err) throw err;
//     fs.writeFileSync(__dirname + "../docs/style.css", css, { encoding: "utf8" });
//     res.end(css);
//   });
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log(`Server running at http://127.0.0.1:3000/`);
// });
