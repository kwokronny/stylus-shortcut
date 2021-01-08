function previewPlugins(hook, vm) {
  hook.init(function () {
    // 初始化完成后调用，只调用一次，没有参数。
  });

  hook.beforeEach(function (content) {
    // 每次开始解析 Markdown 内容时调用
    // ...
    // content=content.replace(/(```html)+([^(```)])+(```)/g,"<div>$1</div>")
    // console.log(content)
    return content;
  });

  hook.afterEach(function (html, next) {
    // 解析成 html 后调用。
    // beforeEach 和 afterEach 支持处理异步逻辑
    // ...
    // 异步处理完成后调用 next(html) 返回结果
    next(html);
  });

  hook.doneEach(function () {
    // 每次路由切换时数据全部加载完成后调用，没有参数。
    // ...
    // document.querySelectorAll("[data-lang=html]").forEach(function(el){
    //   var div = document.createElement("div");
    //   div.innerHTML=el.innerText;
    //   el.parentElement.insertBefore(div,el);
    // })

  });

  hook.mounted(function () {
    // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
  });

  hook.ready(function () {
    // 初始化并第一次加载完成数据后调用，没有参数。
  });
}

if (window) {
  window.$docsify = window.$docsify || {};

  // Init plugin
  window.$docsify.plugins = [].concat(previewPlugins, window.$docsify.plugins || []);
}
