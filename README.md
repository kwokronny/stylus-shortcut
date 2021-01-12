# stylus-shortcut

stylus-shortcut 可以加速编写 CSS，通过 stylus 中 mixin 的功能，将样式常用组合合并汇以简单一句，减少代码的编写量；并通过stylus循环将常用主题变量生成常用的样式规则，可快捷使用。

[] | [说明文档](https://kwokronny.top/stylus-shortcut-docs/)

## 开发意图
通过问答的方式介绍此项目可为你解决的困扰
1. Q: 项目设计稿无相似的 UI 样式库直接应用
  > A: 只提供最基础样式规则及速写样式的Mixin，减少需要覆盖样式等各种复杂情况
2. Q: 已有 UI 样式库，设计稿也按此样式库设计，但时常需要增加些边距，弹性盒子等小样式去排列布局
  > A: 提供各种小而美，常用的样式规则直接使用，并允许通过自定义变量生成符合设计稿的常用小样式。
3. Q: 常常在写完width时基本下一句可能就是height，嗒嗒嗒下来，写了许多行，但常常这些伴随着规律，定位时会写left,top、宽度时可能还会再设置个圆角等
  > A: 通过引入此项目的'mixin.styl'，将编写CSS时常用的规律汇成一句，小小的功能，也可以提升大大的效率。

### 特性
- 通过stylus的特性整理开发的一套加速样式编写的解决方案
- 可快速将设计中常用的规范转化为变量生成常用的样式
- 命名规则应用尊循 BEM
- 小而美，只解决常见但小的麻烦

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
<div class="flex-h">
  <div class="text-c_primary">文本颜色primary</div><!--文本颜色为变量值primary-->
  <div class="box bg-c_primary spac-ml_20"></div><!--背景颜色为primary-->
  <div class="box bg-c_primary spac-mh_20"></div><!--水平外间距-->
  <div class="box bg-c_primary spac-p_20">内间距</div><!--四边内间距-->
</div>
```