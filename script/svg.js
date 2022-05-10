var fs = require("fs");
var path = require("path");
var request = require("request");

let svg = [
  "https://tailwindcss.com/img/cursors/cursor-auto.svg",
  "https://tailwindcss.com/img/cursors/cursor-default.svg",
  "https://tailwindcss.com/img/cursors/cursor-pointer.svg",
  "https://tailwindcss.com/img/cursors/cursor-wait.svg",
  "https://tailwindcss.com/img/cursors/cursor-text.svg",
  "https://tailwindcss.com/img/cursors/cursor-move.svg",
  "https://tailwindcss.com/img/cursors/cursor-help.svg",
  "https://tailwindcss.com/img/cursors/cursor-not-allowed.svg",
  "https://tailwindcss.com/img/cursors/cursor-none.svg",
  "https://tailwindcss.com/img/cursors/cursor-context-menu.svg",
  "https://tailwindcss.com/img/cursors/cursor-progress.svg",
  "https://tailwindcss.com/img/cursors/cursor-cell.svg",
  "https://tailwindcss.com/img/cursors/cursor-crosshair.svg",
  "https://tailwindcss.com/img/cursors/cursor-vertical-text.svg",
  "https://tailwindcss.com/img/cursors/cursor-alias.svg",
  "https://tailwindcss.com/img/cursors/cursor-copy.svg",
  "https://tailwindcss.com/img/cursors/cursor-no-drop.svg",
  "https://tailwindcss.com/img/cursors/cursor-grab.svg",
  "https://tailwindcss.com/img/cursors/cursor-grabbing.svg",
  "https://tailwindcss.com/img/cursors/cursor-all-scroll.svg",
  "https://tailwindcss.com/img/cursors/cursor-col-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-row-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-n-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-e-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-s-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-w-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-ne-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-nw-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-se-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-sw-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-ew-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-ns-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-nesw-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-nwse-resize.svg",
  "https://tailwindcss.com/img/cursors/cursor-zoom-in.svg",
  "https://tailwindcss.com/img/cursors/cursor-zoom-out.svg",
];

/**
 *
 * @param {*} url  网络文件url地址
 * @param {*} fileName 	文件名
 * @param {*} dir 下载到的目录
 */
function getfileByUrl(url, fileName, dir) {
  console.log("------------------------------------------------");
  console.log(url);
  console.log(fileName);
  console.log(dir);
  let stream = fs.createWriteStream(path.join(dir, fileName));
  request(url)
    .pipe(stream)
    .on("close", function (err) {
      console.log("文件" + fileName + "下载完毕");
    });
}

svg.forEach((url) => {
  getfileByUrl(url, url.split("/").pop(), "./docs/img/cursors");
});
