# stylus-shortcut

stylus-shortcut 可以加速编写 CSS，通过 stylus 中 mixin 的功能，将样式常用组合合并汇以简单一句，减少代码的编写量；并通过stylus循环将常用主题变量生成常用的样式规则，可快捷使用。

### 特性
- 通过stylus的特性整理开发的一套加速样式编写的解决方案
- 可快速将设计中常用的规范转化为变量生成常用的样式
- 命名规则应用BEM

### 示例
```variable.styl
yoz_color = {
  primary: #1890ff,
  link: #1890ff,
  success: #52c41a,
  warning: #faad14,
  error: #f5222d
};
yoz_spacing ?= {
  '5': 5px,
  '10': 10px,
  '20': 20px,
  '30': 30px
};
...
```

```html
<div class="text-c_primary"></div><!--文本颜色为变量值primary-->
<div class="bg-primary"></div><!--背景颜色为primary-->
<div class="spac-mh_20"></div><!--水平外间距-->
<div class="spac-p_20"></div><!--周围内间距-->
```