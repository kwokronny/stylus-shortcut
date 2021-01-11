function previewPlugins(hook, vm) {
  hook.beforeEach(function (content) {
    content = content.replace(/(```html)+([^```]+)+(```)/g, '$1$2$3 \n<div class="demo">$2</div>');
    return content;
  });
  hook.doneEach(function () {
    document.querySelectorAll("input[type=radio]").forEach(function (radio) {
      radio.onchange = function (e) {
        document.getElementById(e.target.dataset.id).className = e.target.dataset.class + e.target.value;
        document.getElementById(e.target.dataset.id + "Value").innerHTML = e.target.value;
      };
    });
  });
}

if (window) {
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(previewPlugins, window.$docsify.plugins || []);
}
