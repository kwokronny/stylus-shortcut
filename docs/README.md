# stylus-shortcut

[作者博客](https://kwokronny.top) | [说明文档](https://kwokronny.top/stylus-shortcut-document/)

stylus-shortcut 可以加速编写 CSS，通过 stylus 中 mixin 的功能，将样式常用组合合并汇以简单一句，减少代码的编写量；并通过 stylus 循环将常用主题变量生成常用的样式规则，可快捷使用。

## 开发意图

编写这个项目最初的目的是在开发一 SAAS 平台时，我已采用 iviewUI 的基础上进行开发，并通过自定义主题覆盖了部分样式及颜色变量后。常常需要在部分元素上为元素命名后仅仅为其加一项间距属性或文本颜色等简单的样式。来回切换样式文件与 DOM 文件，及为不重要的小元素命名，多而烦；或许这也是为什么 Bootstrap 可以一下成为大家热爱的库吧。

所以我简单通过 stylus 的循环按设计规范中常用的间距生成了多个间距样式及颜色样式，真的非常的方便与快落；事实证明频繁的切换文件是容易忘记自己需要做什么的。
再之后，为一些复杂的设计编写样式时，常常在写完 width 时基本下一句可能就是 height，嗒嗒嗒下来，写了许多行，但常常这些伴随着规律，定位时会写 left,top、宽高写完时可能还会再设置个圆角等，写了几年前端后早已厌烦了长长的样式规则。
所以我通过 stylus 的 mixin 功能，将编写 CSS 时常用的规律汇成一句，小小的功能，也可以提升大大的效率。
编写文档时，也常问自己项目如此的小，是否需要变成一个库呢？我找到了答案，小而简就是这个项目的初心，他解决的是开发中常常忽视的小烦恼，整理出规律增加编写效率也是这个小项目最重要的核心
如果你也同我一样存在这些厌烦，不妨试试这个库哟~

## 特性

- 通过 stylus 的特性整理开发的一套加速样式编写的解决方案
- 可快速将设计中常用的规范转化为变量生成常用的样式
- 命名规则应用尊循 BEM
- 小而美，只解决常见但小的麻烦

## 使用方式

```stylus
@import "your-custom-variable-file.styl" //引入自定义变量
// 同时引入 shortcut.styl mixin.styl
@import "~@hiyoz/stylus-shortcut"
// or 单独引入 shortcut.styl
@import "~@hiyoz/stylus-shortcut/src/shortcut.styl
// or 单独引入 mixin.styl
@import "~@hiyoz/stylus-shortcut/src/mixin.styl
```

> 变量与mixin需要在多文件下自动引用可通过stylus-loader
如 vue-cli@3 配置示例，在 stylus-loader 中配置 import 全局引入

```javascript
//vue.config.js
modules.export={
  ...
  css: {
    // 配置css模块
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      stylus: {
        import: [
          "your-custom-variable-file.styl",
          "@hiyoz/stylus-shortcut/src/mixin.styl"
        ]
      }
    }
  }
  ...
}
```

## 示例

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
<div class="flex-h">
  <div class="text-c_primary">文本颜色primary</div>
  <!--文本颜色为变量值primary-->
  <div class="box bg-c_primary spac-ml_20"></div>
  <!--背景颜色为primary-->
  <div class="box bg-c_primary spac-mh_20"></div>
  <!--水平外间距-->
  <div class="box bg-c_primary spac-p_20">内间距</div>
  <!--四边内间距-->
</div>
```
