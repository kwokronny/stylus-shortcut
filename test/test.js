const stylus = require("stylus");
const fs = require("fs");

stylus.render(fs.readFileSync(__dirname + "/test.styl", "utf8"), function (err, css) {
  if (err) throw err;
  fs.writeFileSync(__dirname + "/test.css", css, { encoding: "utf8" });
});
