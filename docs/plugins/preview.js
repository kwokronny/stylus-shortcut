function previewPlugins(hook, vm) {
  hook.beforeEach(function (content) {
    content = content.replace(/(```html)+([^```]+)+(```)/g, '$1$2$3 \n<div class="demo">$2</div>');
    // console.log(content)
    return content;
  });
}

if (window) {
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(previewPlugins, window.$docsify.plugins || []);
}
