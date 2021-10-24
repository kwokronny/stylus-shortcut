# Stylus-Shortcut

简化你的样式编写！设计规范快速生成常用的辅助性 `class`；将常用组合的属性合并简写。

<!-- 可以加速编写 CSS，通过 stylus 中 mixin 的功能，将样式常用组合汇以简单一句，减少代码的编写量；并通过 stylus 循环将常用主题变量生成常用的样式规则，可快捷使用。 -->

<!-- ## 开发意图 -->

<!-- 编写这个项目最初的目的是在开发 SaaS 平台时，我已采用 ElementUI 的基础上进行开发，并通过自定义主题覆盖了部分样式及颜色变量后。常常需要在部分元素上为元素命名后仅仅为其加一项间距属性或文本颜色等简单的样式。来回切换样式文件与 DOM 文件，及为不重要的小元素命名，多而烦；或许这也是为什么 Bootstrap 可以一下成为大家热爱的库吧。

所以我简单通过 stylus 的循环按设计规范生成常用的间距、字体、颜色、边框、flex与阴影等样式，真的非常的方便；事实证明频繁的切换文件是容易忘记自己需要做什么的。
再之后，为一些复杂的设计编写样式时，常常在写完 width 时基本下一句可能就是 height，嗒嗒嗒下来，写了许多行，但常常这些伴随着规律，定位时会写 left,top、宽高写完时可能还会再设置个圆角等，写了几年前端后早已厌烦了长长的样式规则。
所以我通过 stylus 的 mixin 功能，将编写 CSS 时常用的规律汇成一句，小小的功能，也可以提升大大的效率。
编写文档时，也常问自己项目如此的小，是否需要变成一个库呢？我找到了答案，小而简就是这个项目的初心，他解决的是开发中常常忽视的小烦恼，整理出规律增加编写效率也是这个小项目最重要的核心
如果你也同我一样存在这些厌烦，不妨试试这个库哟~ -->

## 特性

- 组合简写新方式，样式编写减负
- 减少重复性编写样式
- 快速将设计规范转化成样式库
- 遵循 BEM 命名规则
- 小巧简洁

## 设计规范

按要求配置自定义变量文件，引入 shortcut.styl 文件，就会根据自定义变量生成常用的设计规范 `class`。

```stylus
@import "your-variable-file.styl" //自定义的变量文件
@import "~stylus-shortcut/src/shortcut.styl" //便捷样式生成
```

- ### 色彩规范

  ```styl
  yoz_color ?= {
  	primary: #1890ff,
  	success: #52c41a,
  	warning: #faad14,
  	error: #f5222d,
  	heading: rgba(black, 0.85),
  	text: rgba(black, 0.65),
  	sub_text: rgba(black, 0.45),
  	disabled: #c5c8ce,
  	border: #e8eaec
  };
  ```
<div class="row gutter-s">
	<div class="col-4">
		<div class="color-box bg-c_primary"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_success"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_warning"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_error"></div>
	</div>
</div>
<div class="row gutter-s spac-mt_20">
	<div class="col-4">
		<div class="color-box bg-c_heading"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_text"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_sub_text"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_disabled"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_border"></div>
	</div>
</div>

- ### 文本

	```styl
	yoz_font_family ?= {
		sans: unquote('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'),
		serif: unquote('serif')
	};
	yoz_font_size ?= {
		s: 12px 20px,
		m: 14px 22px,
		b: 16px 24px,
		l: 18px 28px
	};
	```
	- #### 字体 
		<div class="text-f_sans">无衬线字体</div>
		<div class="text-f_serif">有衬线字体</div>

	- #### 尺寸
		<div class="text-s_e">small 辅助文字</div>
		<div class="text-s_c">middle 正文</div>
		<div class="text-s_st">small title 小标题</div>
		<div class="text-s_t">title 标题</div>
		<div class="text-s_lt">large title 大标题</div>

- ### 圆角
	```styl
	yoz_radius ?= {
		s: 4px,
		m: 8px,
		l: 20px,
		lr: 20px 0 0 0,
		c: 100%
	};
	```
<div class="row gutter-s">
	<div class="col-4">
		<div class="color-box bg-c_border radius-s"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_border radius-m"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_border radius-l"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_border radius-lr"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_border radius-c"></div>
	</div>
</div>

- ### 阴影
	```styl
	yoz_shadow ?= {
		s: 0 0 2px rgba(0, 0, 0, 0.6),
		m: 0 0 5px rgba(0, 0, 0, 0.6)
	};
	```
<div class="row gutter-s">
	<div class="col-4">
		<div class="color-box bg-c_border shadow-s"></div>
	</div>
	<div class="col-4">
		<div class="color-box bg-c_border shadow-m"></div>
	</div>
</div>