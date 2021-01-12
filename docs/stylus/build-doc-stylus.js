const stylus = require("stylus");
const fs = require("fs");
const path = require("path");

stylus.render(fs.readFileSync(path.resolve(__dirname,"doc.styl"), "utf8"), function (err, css) {
  if (err) throw err;
  fs.writeFileSync("./docs/style.css", css, { encoding: "utf8" });
});