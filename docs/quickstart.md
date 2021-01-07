
## 使用方式

```stylus
@import "~@yoz/stylus-shortcut/src/shortcut.styl"
```


## 使用方式

如 vue-cli@3 配置示例，在 stylus-loader 中配置 import 做到全局引入

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
          "@yoz/stylus-shortcut/mixin.styl"
        ]
      }
    }
  }
  ...
}
```

## 自定义变量

在 `shortcut.styl` 文件前引用

```stylus
@import "your-variable-file.styl" //如有自定义情况时可引入自定义变量
@import "~@yoz/stylus-shortcut/shortcut.styl"
```

亦可在 `stylusOptions` 配置中全局引用
如: vue-cli@3 配置示例

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
          "your-custom-file.styl"
        ]
      }
    }
  }
  ...
}
```

自定义变量文件 `your-custom-file.styl`

> 变量成员可按规则自由设置，自定义变量将盖默认值

```stylus

// 默认常用颜色，
yoz_color = {
  primary: #1890ff,
  link: #1890ff,
  success: #52c41a,
  warning: #faad14,
  error: #f5222d,
  heading: rgba(black, 0.85),
  text: rgba(black, 0.65),
  sub_text: rgba(black, 0.45),
  disabled: #c5c8ce,
  border: #e8eaec
};
// 常用字体
yoz_font_family = {
  sans: unquote('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'),
  serif: unquote('Noto Serif SC')
};
// 常用字体大小
yoz_font_size = {
  s: 12px 20px,
  m: 14px 24px,
  l: 18px 30px
};
// 常用间距大小
yoz_spacing = {
  '5': 5px,
  '10': 10px,
  '20': 20px,
  '30': 30px
};
```